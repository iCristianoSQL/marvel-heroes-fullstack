import { RegisterOptions } from "react-hook-form";
import * as S from "./styles";
import { IStyledTextInput } from "./types";

export const TextInput = ({
  height,
  width,
  placeholder,
  type,
  label,
  handleChange,
  register,
}: IStyledTextInput) => {
  return (
    <S.Label>
      {label}
      <S.TextInput
        onChange={handleChange}
        type={type}
        height={height}
        width={width}
        placeholder={placeholder}
        label={label}
        {...register}
      />
    </S.Label>
  );
};

export default TextInput;
