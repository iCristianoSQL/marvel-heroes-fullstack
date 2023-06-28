import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import * as S from "./styles";
import { AiOutlineFileImage } from "react-icons/ai";
import TextInput from "../../TextInput";
import TextArea from "../../TextArea";

const schema = z.object({
  name: z.string().max(20).nonempty(),
  description: z.string().max(2000).nonempty(),
  team: z.number().optional(),
  image: z.string().nonempty(),
  banner: z.string().nonempty(),
});

type ChampionSchema = z.infer<typeof schema>;

export const ChampionScreen = () => {
  const [image1080x1920, setImage1080x1920] = useState<string | null>(null);
  const [image1920x1080, setImage1920x1080] = useState<string | null>(null);
  const [heroName, setHeroName] = useState("Wolverine");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChampionSchema>();

  const onSubmit = (data: ChampionSchema) => {
    console.log(data);
  };

  const handleImage1080x1920Change = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setImage1080x1920(URL.createObjectURL(file));
    }
  };

  const handleImage1920x1080Change = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setImage1920x1080(URL.createObjectURL(file));
    }
  };

  return (
    <S.Container>
      <h1>ChampionScreen</h1>
      <div className="register-champion-box">
        <div className="images-box">
          <div className="profile-image-box">
            <div className="champion-image">
              {image1080x1920 && (
                <>
                  <img src={image1080x1920} alt="Image 1080x1920" />
                  <span>
                    <h1>{heroName}</h1>
                  </span>
                </>
              )}
              {!image1080x1920 && <AiOutlineFileImage />}
            </div>
            <S.FileInput>
              <label className="custom-file-upload">
                Selecionar arquivo
                <input
                  type="file"
                  id="image1080x1920"
                  onChange={handleImage1080x1920Change}
                />
              </label>
            </S.FileInput>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            label="Nome do Herói:"
            type="text"
            id="name"
            register={register("name", { required: true })}
          />
          {errors.name && <span className="error">O nome é obrigatório.</span>}

          <TextArea
            label="Descrição:"
            id="description"
            register={register("description", { required: true })}
          />
          {errors.description && (
            <span className="error">A descrição é obrigatória.</span>
          )}

          <TextInput
            label="Equipe:"
            type="number"
            id="team"
            register={register("team")}
          />

          <TextInput
            label="Imagem:"
            type="text"
            id="image"
            register={register("image", { required: true })}
          />
          {errors.image && (
            <span className="error">A imagem é obrigatória.</span>
          )}

          <TextInput
            label="Banner:"
            type="text"
            id="banner"
            register={register("banner", { required: true })}
          />
          {errors.banner && (
            <span className="error">O banner é obrigatório.</span>
          )}

          <button type="submit">Enviar</button>
        </form>
      </div>
    </S.Container>
  );
};

/* <div className='banner-image-box'>
            {image1920x1080 && <img src={image1920x1080} alt="Image 1920x1080"/>}
            <label htmlFor="image1920x1080">Image 1920x1080:</label>
            <input type="file" id="image1920x1080" onChange={handleImage1920x1080Change} />
        </div> */
