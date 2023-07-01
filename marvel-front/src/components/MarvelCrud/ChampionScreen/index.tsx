import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "react-query";
import { AiOutlineFileImage } from "react-icons/ai";

import { uploadImage } from "../../../services/imgBB";
import { IChampion, ISkills } from "../../../utils/@types";
import { schema } from "./schema";

import * as S from "./styles";
import { SkillTag } from "../../SkillList/SkillTag";
import TextInput from "../../TextInput";
import TextArea from "../../TextArea";
import { Button, SkillList } from "../..";
import SelectInput from "../../SelectInput";
import { MarvelServices } from "../../../services/marvel";
import { toast } from "react-toastify";
import { handleRequestError } from "../../../utils/requestErrors";

type ChampionSchema = z.infer<typeof schema>;

export const ChampionScreen = () => {
  const [championImage, setChampionImage] = useState<string | null>(null);
  const [bannerImage, setBannerImage] = useState<string | null>(null);
  const [selectedSkills, setSelectedSkills] = useState<ISkills[]>([]);

  const uploadImageMutation = useMutation(uploadImage);
  const createChampion = useMutation(MarvelServices.usePostChampion);

  const fileChampionImageRef = useRef<File | null>(null);
  const fileBannerImageRef = useRef<File | null>(null);

  const { data: teams } = MarvelServices.useGetTemas();
  const teamsOptions = teams?.teams?.map(({ id, name }) => ({ value: id, label: name })) ?? [];

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ChampionSchema>();

  const championName = watch("name");
  const team = watch("team_id");

  const handleSkillSelect = (skill: ISkills) => {
    if (!selectedSkills.find((selected) => selected.id === skill.id)) {
      setSelectedSkills((prevSkills) => [...prevSkills, skill]);
    }
  };

  const handleSkillRemove = (skill: ISkills) => {
    setSelectedSkills((prevSkills) =>
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
      if (!fileChampionImageRef.current || !fileBannerImageRef.current) {
        toast.error(fileChampionImageRef.current && fileBannerImageRef.current ? "As duas imagens foram inseridas." : fileBannerImageRef.current ? "Insira a imagem do Campeão." : fileChampionImageRef.current ? "Insira o banner." : "Insira o banner e a imagem do Campeão.");
        return;
      }
  
      const championImageResult = await uploadImageMutation.mutateAsync(fileChampionImageRef.current);
      const bannerImageResult = await uploadImageMutation.mutateAsync(fileBannerImageRef.current);
  
      if (!championImageResult?.data?.display_url || !bannerImageResult?.data?.display_url) {
        toast.error("Falaha ao enviar as imagens.");
        return;
      }
  
      const skills = selectedSkills.map((skillId) => skillId.id);
      const updatedData: IChampion = {
        ...data,
        image: championImageResult.data.display_url,
        banner: bannerImageResult.data.display_url,
        skills,
      };
  
      createChampion.mutateAsync(updatedData);
    } catch (error) {
      handleRequestError(error)
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

            <SelectInput
              register={register("team_id")}
              options={[
                { value: 0, label: "Selecione uma Equipe" },
                ...teamsOptions
              ]}
              width="100%"
            />
            <span className='skill-title'>Habilidades:</span>
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
          {selectedSkills.map((skill: ISkills) => {
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
