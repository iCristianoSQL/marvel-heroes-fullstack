import { RegisterOptions } from "react-hook-form";
import * as S from "./styles";
import { IStyledTextInput } from "./types";

export const TextInput = ({
  height,
  width,
  placeholder,
  type,
  label,
  className,
  handleChange,
  register,
}: IStyledTextInput) => {
  return (
    <S.Label>
      {label}
      <S.TextInput
        onChange={handleChange}
        className={className}
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
