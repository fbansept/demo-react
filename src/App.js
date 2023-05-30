import "./App.css";
import Sidemenu from "./composants/common/Sidemenu/Sidemenu";
import Header from "./composants/common/Header/Header";
import { Routes, Route } from "react-router-dom";
import Connexion from "./composants/pages/Connexion/Connexion";
import Accueil from "./composants/pages/Accueil/Accueil";

function App() {
  return (
    <>
      <Header>LOCMNS</Header>

      <Routes>
        <Route path="/" element={<Accueil />}></Route>
        <Route path="/connexion" element={<Connexion />}></Route>
      </Routes>
    </>
  );
}

export default App;
