import { AxiosResponse } from "axios";
import { IGetChampionsResponse, IGetSkillsResponse } from "../utils/@types";
import { api } from "./api";
import { useQuery, UseQueryResult } from "react-query";

export const MarvelServices = {
  useGetChampions: (): UseQueryResult<IGetChampionsResponse> => {
    return useQuery<IGetChampionsResponse>(["lista-de-campeoes"], async () => {
      const response: AxiosResponse<IGetChampionsResponse> =
        await api.get<IGetChampionsResponse>("champions");
      return response.data;
    });
  },

  useGetSkills: (): UseQueryResult<IGetSkillsResponse> => {
    return useQuery<IGetSkillsResponse>(["lista-de-habilidades"], async () => {
      const response: AxiosResponse<IGetSkillsResponse> =
        await api.get<IGetSkillsResponse>("skills");
      return response.data;
    });
  },
};
