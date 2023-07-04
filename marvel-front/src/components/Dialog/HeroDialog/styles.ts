import { styled } from "styled-components";
import { IChampionDialog } from "./types";
import { colors } from "../../../utils/colors";

export const Container = styled.div`

    .image-relative-box {
        position: relative;
        
        span {
            bottom: 0;
            position: absolute;
            height: 100%;
            width: 100%;
            background-image: linear-gradient(to top, ${colors.primary["0.1"]} 30%, transparent 70%);
            display: flex;
            align-items: flex-end;

            h1 {
                color: ${colors.primary[1]} !important;
                font-size: 3.5rem;
            }

            @media (max-width: 568px) {
                position: initial;
            }
        }
    }

    .description-box, .team-box {
        h2 {
            font-size: 1.4rem;
            width: fit-content;
        }
        p {
            margin-top: 0.5rem;
            font-size: 1rem;
        }
        strong {
            font-size: 1.2rem;
        }
    }

    .skills-box {
        margin-top: 0.5rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        h2 {
            width: 100%;
            font-size: 1.4rem;
        }
    }
`;

export const Image = styled.div<IChampionDialog>`
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
  @media (max-width: 568px) {
    display: none;
  }
`;
