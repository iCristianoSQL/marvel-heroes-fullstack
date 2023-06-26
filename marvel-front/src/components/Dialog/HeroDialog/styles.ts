import { styled } from "styled-components";
import { IHeroDialog } from "./types";
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
        }
    }

    .description-box {
        margin-top: 0.5rem;
        strong {
            font-size: 1.4rem;
            border-bottom: 1px solid ${colors.primary[1]};
        }
        p {
            margin-top: 0.5rem;
            font-size: 1rem;
        }
    }
`;

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
