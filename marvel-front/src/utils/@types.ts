export interface IChampion {
    id: number;
    name: string;
    image: string;
    banner: string;
    description: string;
  }

  export interface IGetChampionResponse {
    message: string;
    champions: IChampion[];
  }