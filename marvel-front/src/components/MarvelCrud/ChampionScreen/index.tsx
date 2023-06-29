import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import * as S from "./styles";
import { AiOutlineFileImage } from "react-icons/ai";
import TextInput from "../../TextInput";
import TextArea from "../../TextArea";
import { useMutation } from "react-query";
import { uploadImage } from "../../../services/imgBB";
import { Button, SkillList } from "../..";
import { ISkills } from "../../../utils/@types";
import { api } from "../../../services/api";

const schema = z.object({
  name: z.string().max(20).nonempty(),
  description: z.string().max(2000).nonempty(),
  team: z.number().optional(),
  image: z.string().optional(),
  banner: z.string().optional(),
  skills: z.array(z.number()).optional(),
});

type ChampionSchema = z.infer<typeof schema>;

export const ChampionScreen = () => {
  const [championImage, setChampionImage] = useState<string | null>(null);
  const [bannerImage, setBannerImage] = useState<string | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<ISkills>({} as ISkills);

  const fileChampionImageRef = useRef<File | null>(null);
  const fileBannerImageRef = useRef<File | null>(null);

  const handleSkillSelect = (skill: ISkills) => {
    setSelectedSkill(skill);
  };

  const uploadImageMutation = useMutation(uploadImage);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ChampionSchema>();

  const championName = watch("name");

  const onSubmit = async (data: ChampionSchema) => {
    try {
      if (fileChampionImageRef.current && fileBannerImageRef.current) {
        const championImageResult = await uploadImageMutation.mutateAsync(
          fileChampionImageRef.current
        );

        const bannerImageResult = await uploadImageMutation.mutateAsync(
          fileBannerImageRef.current
        );
        if (championImageResult && championImageResult.data && championImageResult.data.display_url && bannerImageResult && bannerImageResult.data && bannerImageResult.data.display_url) {
          const updatedData: ChampionSchema = {
            ...data,
            image: championImageResult.data.display_url,
            banner: bannerImageResult.data.display_url,
            skills: [selectedSkill.id, 5, 6, 7, 8],
          };
          await api.post("/champions", updatedData);
        } else {
          console.log("Ainda não deu certo");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChampionImage = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setChampionImage(URL.createObjectURL(file));
      fileChampionImageRef.current = file;
    }
  };

  const handleBannerImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setBannerImage(URL.createObjectURL(file));
      fileBannerImageRef.current = file;
    }
  };

  return (
    <S.Container>
      <h1>ChampionScreen</h1>
      <div className="register-champion-box">
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.FileInput>
            <input
              type="file"
              id="championImage"
              onChange={handleChampionImage}
            />
            <label htmlFor="championImage" className="custom-file-upload">
              <div className="champion-image">
                {championImage && (
                  <>
                    <img src={championImage} alt="Champion Image" />
                    <span>
                      <h1>{championName}</h1>
                    </span>
                  </>
                )}
                {!championImage && <AiOutlineFileImage />}
              </div>
            </label>
          </S.FileInput>
          <div className="first-column-form">
            <TextInput
              label="Nome do Herói:"
              type="text"
              id="name"
              register={register("name", { required: true })}
            />
            {errors.name && (
              <span className="error">O nome é obrigatório.</span>
            )}

            <TextInput
              label="Equipe:"
              type="number"
              id="team"
              register={register("team")}
            />

            <SkillList onSelect={handleSkillSelect} width="100%" height="16rem" className="skills-list"/>
          </div>

          <div className="second-column-form">
            <TextArea
              label="Descrição:"
              id="description"
              register={register("description", { required: true })}
            />
            {errors.description && (
              <span className="error">A descrição é obrigatória.</span>
            )}

            <S.FileInput>
              <input
                type="file"
                id="bannerImage"
                onChange={handleBannerImage}
              />
              <label htmlFor="bannerImage" className="custom-file-upload">
                <div className="banner-image">
                  {bannerImage && (
                      <img src={bannerImage} alt="Banner" />
                  )}
                  {!bannerImage && <AiOutlineFileImage />}
                </div>
              </label>
            </S.FileInput>
          </div>

          <Button type="submit">Enviar</Button>
        </S.Form>
      </div>
    </S.Container>
  );
};
