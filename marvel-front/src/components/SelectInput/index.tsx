import * as S from "./styles";
import { IStyledSelectInput } from "./types";

const SelectInput = ({
  height,
  width,
  options,
  label,
  register,
}: IStyledSelectInput) => {
  return (
    <S.Label>
      {label}
      <S.SelectInput
        height={height}
        width={width}
        label={label}
        {...register}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </S.SelectInput>
    </S.Label>
  );
};

export default SelectInput;
