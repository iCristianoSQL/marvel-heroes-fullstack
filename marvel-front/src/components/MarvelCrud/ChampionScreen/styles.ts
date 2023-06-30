import { styled } from "styled-components";
import { colors } from "../../../utils/colors";

export const Container = styled.div`
  padding: 0 4rem;

  h1 {
    text-align: center;
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
  flex-direction: column;
  width: 100%;
  margin-top: 0.5rem;

  .register-box {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }


  .first-column-form {
      width: 30rem;
      height: 23rem;

      select {
        margin-top: 0.5rem;
      }

      input {
        width: 100%;
      }

      .skill-title {
        margin-top: 1rem;
        display: block;
        font-weight: 600;
        font-size: 1rem;
        line-height: 1.1rem;
        color: ${colors.danger[0]};
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
    margin-top: 1rem;
    align-self: end;
  }
`;

export const SkillsDiv = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;

  border-top: 1px solid white;
`;