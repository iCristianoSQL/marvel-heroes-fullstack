import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;

  .box-heroes-img {
    display: flex;
    flex-wrap: wrap;
    grid-template-columns: repeat(auto-fill, minmax(6rem, 1fr));
    gap: 1rem;
    max-width: 42rem;
    margin-top: 2rem;

    justify-content: center;
    align-items: center;

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

  @media (max-width: 392px) {
    h1 {
      font-size: 1.8rem;
    }

    .search-hero-input {
      height: 1.563rem;
      width: 13rem;
    }
  }

  @media (max-width: 347px) {
    h1 {
      display: none;
    }

    button {
      font-size: 0.8rem;
    }
  }
`;
