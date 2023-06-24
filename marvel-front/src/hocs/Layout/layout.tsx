import { NavigationBar } from "../../components";
import { Container } from "./styles";

const withLayout =
  <P extends object>(Component: React.FC<P>): React.FC<P> =>
  (props) => {
    return (
      <>
        <Container>
          <NavigationBar />
          <Component {...props} />
        </Container>
      </>
    );
  };

export default withLayout;
