import { AxiosResponse } from 'axios';
import { IGetChampionResponse } from '../utils/@types';
import { api } from './api';

export const MarvelServices = {
  getChampions: async (): Promise<IGetChampionResponse> => {
    try {
      const response: AxiosResponse<IGetChampionResponse> = await api.get<IGetChampionResponse>('champions');
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};
