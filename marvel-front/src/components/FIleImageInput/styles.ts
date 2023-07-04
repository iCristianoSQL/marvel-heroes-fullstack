import { styled } from "styled-components";
import { colors } from "../../utils/colors";

export const FIleImageInput = styled.div`
  input[type="file"] {
    display: none;
  }

  label {
    div {
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
  }
`;