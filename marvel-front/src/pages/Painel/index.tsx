import { HeroesCarousel, MarvelCrud } from "../../components";
import withLayout from "../../hocs/Layout/layout";

const Painel = () => {
  return (
    <>
      <HeroesCarousel />
      <MarvelCrud/>
    </>
  );
};

export default withLayout(Painel);
