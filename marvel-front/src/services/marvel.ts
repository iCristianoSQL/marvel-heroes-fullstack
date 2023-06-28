import { AxiosResponse } from "axios";
import { IGetChampionResponse } from "../utils/@types";
import { api } from "./api";
import { useQuery, UseQueryResult } from "react-query";

export const MarvelServices = {
  useGetChampions: (): UseQueryResult<IGetChampionResponse> => {
    return useQuery<IGetChampionResponse>(["lista-de-campeoes"], async () => {
      const response: AxiosResponse<IGetChampionResponse> =
        await api.get<IGetChampionResponse>("champions");
      return response.data;
    });
  },
};
