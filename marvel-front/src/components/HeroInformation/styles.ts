import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;

    img {
        width: 16rem;
        border-radius: 10px;
    }

    .box-hero-info {
        margin-top: 2rem;
        width: 24rem;
        height: 100%;

        h1 {
            font-size: 2.5rem;
        }

        p {
            font-size: 1.2rem;
        }

        .view-more-button {
            margin-top: 1rem;
        }
    }
`;