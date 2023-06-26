import { ReactNode, createContext, useState } from "react";
import { IHero } from "../utils/@types";
import { heroes } from "../utils/heroes";

interface HeroSelectedContextType {
  hero: IHero;
  setHeroValue: (newValue: IHero) => void;
}

const HeroSelectedContext = createContext<HeroSelectedContextType>(
  {} as HeroSelectedContextType
);

const ids: number[] = [];
heroes.forEach((hero) => {
  ids.push(hero.id);
});
const randomIndex = Math.floor(Math.random() * ids.length);
const heroFinded = heroes.find((hero) => hero.id === ids[randomIndex]) ?? {} as IHero;

const HeroSelectedProvider = ({children}: { children: ReactNode }) => {
  const [hero, setHero] = useState<IHero>({
    id: heroFinded?.id,
    name: heroFinded?.name,
    banner: heroFinded?.banner,
    image: heroFinded?.image,
    description: heroFinded?.description,
  });

  const setHeroValue = (newValue: IHero) => {
    setHero(newValue);
  };

  return (
    <HeroSelectedContext.Provider value={{ hero, setHeroValue }}>
      {children}
    </HeroSelectedContext.Provider>
  );
};

export { HeroSelectedProvider, HeroSelectedContext };
