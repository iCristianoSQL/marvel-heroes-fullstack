import withLayout from "./hocs/Layout/layout"
import { GlobalStyle } from "./styles/global"

function App() {
  return (
    <GlobalStyle />
  );
}

export default withLayout(App)