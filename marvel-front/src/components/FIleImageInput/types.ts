export interface FileInputProps {
  id: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  image: string | null;
  imageName?: string | null;
  className: string;
  resolutionWidth?: number;
  resolutionHeight?: number;
  allowedExtensions?: string[];
}
