import { styled } from "styled-components";
import { colors } from "../../../utils/colors";

export const Container = styled.div`
  padding: 0 4rem;

  h1 {
    text-align: center;
  }
  .register-champion-box {
    display: flex;
  }

  .champion-image {
    width: 13rem;
    height: 22.985rem;
    border-width: 1px;
    border-style: solid;
    border-image: linear-gradient(to bottom, blue, red) 1;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }

    svg {
      margin: auto;
      font-size: 3.5rem;
      fill: ${colors.primary["1.1"]};
      align-self: center;
    }

    span {
      position: absolute;
      left: 5px;
      bottom: 35px;
      width: fit-content;
      bottom: 0;
      word-break: break-word;

      h1 {
        color: ${colors.primary[1]} !important;
        font-size: 1.5rem;
        text-align: initial;
      }
    }
  }

  .banner-image {
    width: 100%;
    height: 13rem;
    border-width: 1px;
    border-style: solid;
    border-image: linear-gradient(to bottom, blue, red) 1;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }

    svg {
      margin: auto;
      font-size: 3.5rem;
      fill: ${colors.primary["1.1"]};
      align-self: center;
    }
  }
`;

export const FileInput = styled.div`
  input[type="file"] {
    display: none;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  position: relative;

  width: 100%;
  gap: 1rem;

  .first-column-form {
      width: 30rem;
      height: 23rem;

      input {
        width: 100%;
      }
  }

  .second-column-form {
    height: 100%;
    width: 22.985rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    textarea {
      height: 8rem;
      width: 100%;
    }
  }

  button {
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;