import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Painel } from "../pages";

const NavigationRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/painel" element={<Painel />} />
      </Routes>
    </Router>
  );
};

export default NavigationRoutes;
