import "./App.css";
import Sidemenu from "./composants/common/Sidemenu/Sidemenu";
import Header from "./composants/common/Header/Header";
import { Routes, Route } from "react-router-dom";
import Connexion from "./composants/pages/Connexion/Connexion";
import Accueil from "./composants/pages/Accueil/Accueil";
import { useState } from "react";
import Page404 from "./composants/pages/Page404/Page404";

function App() {
  const [connecte, setConnecte] = useState(false);

  return (
    <>
      <Header connecte={connecte} setConnecte={setConnecte}>
        LOCMNS
      </Header>

      <Routes>
        <Route path="/" element={<Accueil />}></Route>
        <Route path="/connexion" element={<Connexion />}></Route>
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </>
  );
}

export default App;
