import { HeroSelectedProvider } from "./contexts/HeroSelectedContext";
import NavigationRoutes from "./routes";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <HeroSelectedProvider>
      <NavigationRoutes />
      <GlobalStyle />
    </HeroSelectedProvider>
  );
}

export default App;
