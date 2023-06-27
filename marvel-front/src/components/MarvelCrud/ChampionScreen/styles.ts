import { styled } from "styled-components";
import { colors } from "../../../utils/colors";

export const Container = styled.div`
  .images-box {
    display: flex;
    .profile-image-box {
        width: fit-content;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;

        .champion-image {
            width: 13rem;
            height: 22.985rem;
            border-radius: 10px;
            border-width: 1px;
            border-style: solid;
            border-image: linear-gradient(to bottom, blue, red) 1;
            display: flex;

            img {
                width: 100%;
                height: 100%;
            }
            
            svg {
                margin: auto;
                font-size: 3.5rem;
                fill: ${colors.primary["1.1"]};
            }
        }

        span {
            position: absolute;
            left: 5px;
            bottom: 35px;
            width: 100%;
            word-wrap: break-word;

            h1 {
                color: ${colors.primary[1]} !important;
                font-size: 1.5rem;
            }
        }
    }

    .banner-image-box {
      width: 5rem;

      img {
        width: 100%;
      }
    }
  }
`;

export const FileInput = styled.div`
  input[type='file'] {
    display: none;
  }

  .custom-file-upload {
    display: inline-block;
    padding: 8px 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #f0f0f0;
    color: #555;
    cursor: pointer;
  }
`;
