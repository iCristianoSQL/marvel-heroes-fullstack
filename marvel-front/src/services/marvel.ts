import { AxiosResponse } from "axios";
import { IChampionScreen, IGetChampionsResponse, IGetSkillsResponse, IGetTeamsResponse } from "../utils/@types";
import { api } from "./api";
import { useQuery, UseQueryResult } from "react-query";
import { handleRequestError } from "../utils/requestErrors";
import { toast } from "react-toastify";

export const MarvelServices = {
  useGetChampions: (): UseQueryResult<IGetChampionsResponse> => {
    return useQuery<IGetChampionsResponse>(["lista-de-campeoes"], async () => {
      const response: AxiosResponse<IGetChampionsResponse> =
        await api.get<IGetChampionsResponse>("champions");
      return response.data;
    });
  },

  usePostChampion: async (champion: IChampionScreen): Promise<IChampionScreen> => {
    try {
      const response: AxiosResponse<IChampionScreen> = await api.post<IChampionScreen>("champions", champion);
      toast.success("Campeão cadastrado com sucesso!");
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
