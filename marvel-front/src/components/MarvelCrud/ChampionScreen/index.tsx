import React, { useState } from "react";
import * as S from "./styles";
import { AiOutlineFileImage } from "react-icons/ai";

export const ChampionScreen = () => {
  const [image1080x1920, setImage1080x1920] = useState<string | null>(null);
  const [image1920x1080, setImage1920x1080] = useState<string | null>(null);
  const [heroName, setHeroName] = useState("Wolverine");
  console.log(heroName);

  const handleImage1080x1920Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setImage1080x1920(URL.createObjectURL(file));
    }
  };
  
  const handleImage1920x1080Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setImage1920x1080(URL.createObjectURL(file));
    }
  };  

  return (
    <S.Container>
      <h1>ChampionScreen</h1>
      <button onClick={() => setImage1080x1920(null)}>testeee</button>
      <div className="images-box">
        <div className="profile-image-box">
          <div className="champion-image">
            {(image1080x1920 && (
              <>
                <img src={image1080x1920} alt="Image 1080x1920" />
                <span>
                  <h1>{heroName}</h1>
                </span>
              </>
            )) || <AiOutlineFileImage />}
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
    </S.Container>
  );
};

/* <div className='banner-image-box'>
            {image1920x1080 && <img src={image1920x1080} alt="Image 1920x1080"/>}
            <label htmlFor="image1920x1080">Image 1920x1080:</label>
            <input type="file" id="image1920x1080" onChange={handleImage1920x1080Change} />
        </div> */
