import { styled } from "styled-components";
import { IHeroDialog } from "./types";

export const Container = styled.div``;

export const Image = styled.div<IHeroDialog>`
  width: 100%;
  min-height: 20rem;
  position: relative;

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: ${({ hero }) =>
      hero && hero.banner ? `url(${hero.banner})` : ""};
    background-size: cover;
    background-position: center;
  }
`;
