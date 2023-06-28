import { Text, Label } from './styles'

import { ITextAreaProps } from './types'

const TextArea = ({
    label,
    placeholder,
    width,
    height,
    handleChange,
    register,
    ...rest
}: ITextAreaProps) => {
    return (
        <Label>
            {label}
            <Text
                placeholder={placeholder}
                onChange={handleChange}
                height={height}
                width={width}
                {...register}
                {...rest}
            />
        </Label>
    )
}

export default TextArea