import {
  createContext,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { IChampion } from "../utils/@types";
import { MarvelServices } from "../services/marvel";
import { initialChampion } from "../mocks/champion";

interface HeroSelectedContextType {
  heroes: IChampion[];
  selectedHero: IChampion | null;
  setSelectedHero: (hero: IChampion | null) => void;
}

const HeroSelectedContext = createContext<HeroSelectedContextType>({
  heroes: [],
  selectedHero: null,
  setSelectedHero: {} as (hero: SetStateAction<IChampion | null>) => void,
});

const HeroSelectedProvider = ({ children }: { children: ReactNode }) => {
  const [heroes, setHeroes] = useState<IChampion[]>([]);
  const [selectedHero, setSelectedHero] = useState<IChampion | null>(
    initialChampion
  );

  const { data: champions } = MarvelServices.useGetChampions();

  useEffect(() => {
    if (champions) {
      setHeroes(champions.champions);
    }
  }, [champions]);

  return (
    <HeroSelectedContext.Provider
      value={{ heroes, selectedHero, setSelectedHero }}
    >
      {children}
    </HeroSelectedContext.Provider>
  );
};

export { HeroSelectedProvider, HeroSelectedContext };