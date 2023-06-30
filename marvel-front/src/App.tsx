import { ToastContainer } from "react-toastify";
import { HeroSelectedProvider } from "./contexts/HeroSelectedContext";
import NavigationRoutes from "./routes";
import { GlobalStyle } from "./styles/global";

import 'react-toastify/dist/ReactToastify.css';
import 'react-tooltip/dist/react-tooltip.css'

function App() {
  return (
    <HeroSelectedProvider>
      <NavigationRoutes />
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
    </HeroSelectedProvider>
  );
}

export default App;
