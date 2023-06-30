import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "react-query";
import { AiOutlineFileImage } from "react-icons/ai";

import { uploadImage } from "../../../services/imgBB";
import { api } from "../../../services/api";
import { ISkills } from "../../../utils/@types";
import { schema } from "./schema";

import * as S from "./styles";
import { SkillTag } from "../../SkillList/SkillTag";
import TextInput from "../../TextInput";
import TextArea from "../../TextArea";
import { Button, SkillList } from "../..";

type ChampionSchema = z.infer<typeof schema>;

export const ChampionScreen = () => {
  const [championImage, setChampionImage] = useState<string | null>(null);
  const [bannerImage, setBannerImage] = useState<string | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<ISkills[]>([]);

  const uploadImageMutation = useMutation(uploadImage);

  const fileChampionImageRef = useRef<File | null>(null);
  const fileBannerImageRef = useRef<File | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ChampionSchema>();

  const championName = watch("name");

  const handleSkillSelect = (skill: ISkills) => {
    if (!selectedSkill.find((selected) => selected.id === skill.id)) {
      setSelectedSkill((prevSkills) => [...prevSkills, skill]);
    }
  };

  const handleSkillRemove = (skill: ISkills) => {
    setSelectedSkill((prevSkills) =>
      prevSkills.filter((event) => event.id !== skill.id)
    );
  };

  const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setImage: React.Dispatch<React.SetStateAction<string | null>>,
    fileRef: React.MutableRefObject<File | null>
  ) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      fileRef.current = file;
    }
  };

  const handleChampionImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleImageChange(event, setChampionImage, fileChampionImageRef);
  };

  const handleBannerImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleImageChange(event, setBannerImage, fileBannerImageRef);
  };

  const onSubmit = async (data: ChampionSchema) => {
    try {
      if (fileChampionImageRef.current && fileBannerImageRef.current) {
        const championImageResult = await uploadImageMutation.mutateAsync(
          fileChampionImageRef.current
        );

        const bannerImageResult = await uploadImageMutation.mutateAsync(
          fileBannerImageRef.current
        );

        const skills = selectedSkill.map((skillId) => skillId.id)

        if (
          championImageResult &&
          championImageResult.data &&
          championImageResult.data.display_url &&
          bannerImageResult &&
          bannerImageResult.data &&
          bannerImageResult.data.display_url
        ) {
          const updatedData: ChampionSchema = {
            ...data,
            image: championImageResult.data.display_url,
            banner: bannerImageResult.data.display_url,
            skills
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

  return (
    <S.Container>
      <h1>Cadastre um campeão</h1>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <div className="register-box">
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
              placeholder="Nome do campeão"
              type="text"
              id="name"
              register={register("name", { required: true })}
            />
            {errors.name && (
              <span className="error">O nome é obrigatório.</span>
            )}

            <TextInput
              placeholder="Equipe"
              type="number"
              id="team"
              register={register("team")}
            />
            <span>Habilidades:</span>
            <SkillList
              onSelect={handleSkillSelect}
              width="100%"
              height="16rem"
              className="skills-list"
            />
          </div>

          <div className="second-column-form">
            <TextArea
              placeholder="Descrição"
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
                  {bannerImage && <img src={bannerImage} alt="Banner" />}
                  {!bannerImage && <AiOutlineFileImage />}
                </div>
              </label>
            </S.FileInput>
          </div>
        </div>
        <S.SkillsDiv>
          {selectedSkill.map((skill: ISkills) => {
            return (
              <SkillTag
                description={skill.description}
                tooltipId={String(skill.id)}
                key={skill.id}
                color={skill.color}
                onClick={() => handleSkillRemove(skill)}
              >
                {skill.name}
              </SkillTag>
            );
          })}
        </S.SkillsDiv>
        <Button type="submit">Enviar</Button>
      </S.Form>
    </S.Container>
  );
};
