import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;

  .box-heroes-img {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(6rem, 1fr));
    gap: 1rem;
    max-width: 42rem;
    margin-top: 2rem;
    justify-items: center;

    div {
      cursor: pointer;

      img {
        width: 6rem;
        border-radius: 1rem;
      }
    }
  }

  button {
    margin-top: 1rem;
  }

  .empty-image {
    margin-top: 2rem;
    width: 12rem;
  }

  .empty-text {
    margin-top: 0.4rem;
    font-size: 1rem;
  }
`;
