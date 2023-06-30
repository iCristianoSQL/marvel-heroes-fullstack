import { AxiosResponse } from "axios";
import { IChampion, IGetChampionsResponse, IGetSkillsResponse, IGetTeamsResponse } from "../utils/@types";
import { api } from "./api";
import { useQuery, UseQueryResult } from "react-query";
import { handleRequestError } from "../utils/requestErrors";

export const MarvelServices = {
  useGetChampions: (): UseQueryResult<IGetChampionsResponse> => {
    return useQuery<IGetChampionsResponse>(["lista-de-campeoes"], async () => {
      const response: AxiosResponse<IGetChampionsResponse> =
        await api.get<IGetChampionsResponse>("champions");
      return response.data;
    });
  },

  usePostChampion: async (champion: IChampion): Promise<IChampion> => {
    try {
      const response: AxiosResponse<IChampion> = await api.post<IChampion>("champions", champion);
      return response.data;
    } catch (error) {
      handleRequestError(error);
      throw error;
    }
  },

  useGetSkills: (): UseQueryResult<IGetSkillsResponse> => {
    return useQuery<IGetSkillsResponse>(["lista-de-habilidades"], async () => {
      const response: AxiosResponse<IGetSkillsResponse> =
        await api.get<IGetSkillsResponse>("skills");
      return response.data;
    });
  },

  useGetTemas: (): UseQueryResult<IGetTeamsResponse> => {
    return useQuery<IGetTeamsResponse>(["lista-de-equipes"], async () => {
      const response: AxiosResponse<IGetTeamsResponse> =
        await api.get<IGetTeamsResponse>("teams");
      return response.data;
    });
  }
};
