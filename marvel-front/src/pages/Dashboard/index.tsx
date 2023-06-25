import withLayout from "../../hocs/Layout/layout";
import { HeroesCarousel } from "../../components";

const Home = () => {
  return (
    <>
      <HeroesCarousel />
    </>
  );
};

export default withLayout(Home);