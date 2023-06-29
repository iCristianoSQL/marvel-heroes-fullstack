import axios from "axios";
import { IImgbbResponse } from "../utils/@types";

export const uploadImage = async (image: Blob): Promise<IImgbbResponse> => {
  try {
    const formData = new FormData();
    formData.append("image", image);

    const response = await axios.post<IImgbbResponse>(
      "https://api.imgbb.com/1/upload",
      formData,
      {
        params: {
          key: "bb2a92320ed444033845eed3d4f66080",
        },
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
