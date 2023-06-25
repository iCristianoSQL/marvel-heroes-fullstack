import withLayout from "../../hocs/Layout/layout";
import { HeroInformation, HeroesCarousel } from "../../components";

const Home = () => {
  return (
    <>
      <HeroesCarousel />
      <HeroInformation />
    </>
  );
};

export default withLayout(Home);