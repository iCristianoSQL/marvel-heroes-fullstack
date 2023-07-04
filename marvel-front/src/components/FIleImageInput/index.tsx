import * as S from "./styles";
import { AiOutlineFileImage } from "react-icons/ai";
import { toast } from "react-toastify";

import { FileInputProps } from "./types";

export const FileImageInput = ({
  id,
  onChange,
  image,
  imageName,
  className,
  resolutionWidth,
  resolutionHeight,
  allowedExtensions,
}: FileInputProps) => {
  const validateResolution = (file: File) => {
    return new Promise<boolean>((resolve) => {
      const img = new Image();

      img.onload = () => {
        const width = img.width;
        const height = img.height;

        if (
          resolutionWidth !== undefined &&
          resolutionHeight !== undefined &&
          (width !== resolutionWidth || height !== resolutionHeight)
        ) {
          resolve(false);
        } else {
          resolve(true);
        }
      };

      img.src = URL.createObjectURL(file);
    });
  };

  const validateExtension = (file: File) => {
    const extension = file.name.split(".").pop()?.toLowerCase();
    if (extension && allowedExtensions) {
      return allowedExtensions.some((allowedExtension) =>
        extension.endsWith(allowedExtension)
      );
    }
    return true;
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const isValidResolution = await validateResolution(file);
      if (!isValidResolution) {
        toast.error(
          `A imagem deve estar na resolução ${resolutionWidth}x${resolutionHeight}`
        );
        return;
      }

      const isValidExtension = validateExtension(file);
      if (!isValidExtension) {
        toast.error(
          `Apenas os formatos de arquivo ${allowedExtensions?.join(", ")} são permitidos.`
        );
        return;
      }

      onChange(event);
    }
  };

  return (
    <S.FIleImageInput>
      <input type="file" id={id} onChange={handleFileChange} />
      <label htmlFor={id}>
        <div className={className}>
          {image && (
            <>
              <img src={image} alt="File" />
              {imageName && <span>{imageName}</span>}
            </>
          )}
          {!image && <AiOutlineFileImage />}
        </div>
      </label>
    </S.FIleImageInput>
  );
};
