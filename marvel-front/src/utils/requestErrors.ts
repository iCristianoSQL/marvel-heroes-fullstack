import { AxiosError } from "axios";
import { toast } from "react-toastify";

export const handleRequestError = (error: unknown) => {
  if (error instanceof AxiosError) {
    if (error.response?.data?.name) {
      toast.error(`Erro ao fazer a solicitação: ${error.response.data.name}`);
    } else {
      toast.error("Erro ao fazer a solicitação");
    }
  } else {
    toast.error("Erro desconhecido ao fazer a solicitação");
  }
}
