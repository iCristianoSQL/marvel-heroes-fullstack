export interface IChampion {
  id?: number;
  name: string;
  image: string;
  banner: string;
  team_info: {
    id: number;
    name: string;
    description: string;
  };
  description: string;
  skills: {
    id?: number;
    name: string;
    description: string;
    color: string;
  };
}

export interface IChampionScreen {
  id?: number;
  name: string;
  image: string;
  banner: string;
  team_id?: number;
  description: string;
  skills: (number | undefined)[];
}

  export interface IGetChampionsResponse {
    message: string;
    champions: IChampion[];
  }

  export interface ISkills {
    id?: number;
    name: string;
    description: string;
    color: string;
  }

  export interface IGetSkillsResponse {
    message: string;
    skills: ISkills[];
  }

  export interface ITeams {
    id?: number;
    name: string;
    description: string;
    shield: string;
  }

  export interface IGetTeamsResponse {
    message: string;
    teams: ITeams[]
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
  