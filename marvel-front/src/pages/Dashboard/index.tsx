import withLayout from "../../hocs/Layout/layout";
import {
  HeroInformation,
  HeroesCarousel,
  ListOfHeroes,
} from "../../components";

const Home = () => {
  return (
    <>
      <HeroesCarousel />
      <HeroInformation />
      <ListOfHeroes />
    </>
  );
};

export default withLayout(Home);
