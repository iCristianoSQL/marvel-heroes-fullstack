import { createContext, useState } from "react";
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
const heroFinded = heroes.find((hero) => hero.id === ids[randomIndex]);

const HeroSelectedProvider = ({children}: any) => {
  const [hero, setHero] = useState<IHero>({
    id: heroFinded?.id ?? 4,
    name: heroFinded?.name ?? "Cyclope",
    banner: heroFinded?.banner ?? '',
    image: heroFinded?.image ?? "https://terrigen-cdn-dev.marvel.com/content/prod/1x/002cyc_com_crd_01.jpg",
    description: heroFinded?.description ?? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repudiandae ipsa laborum, non reiciendis laboriosam nobis iure modi ipsam officia voluptate ea amet fugit culpa sapiente, voluptatum et unde quaerat?",
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
