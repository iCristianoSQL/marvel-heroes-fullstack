export interface IChampion {
    id: number;
    name: string;
    image: string;
    banner: string;
    description: string;
  }

  export interface IGetChampionsResponse {
    message: string;
    champions: IChampion[];
  }

  export interface ISkills {
    id: number;
    name: string;
    description: string;
    color: string;
  }

  export interface IGetSkillsResponse {
    message: string;
    skills: ISkills[];
  }

  export interface IImgbbData {
    id: string;
    title: string;
    url_viewer: string;
    url: string;
    display_url: string;
    width: number;
    height: number;
    size: number;
    time: number;
    expiration: number;
    image: {
      filename: string;
      name: string;
      mime: string;
      extension: string;
      url: string;
    };
    thumb: {
      filename: string;
      name: string;
      mime: string;
      extension: string;
      url: string;
    };
    delete_url: string;
  }

  export interface IImgbbResponse {
    data: IImgbbData;
    success: boolean;
    status: number;
  }
  