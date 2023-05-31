import React, { useState } from "react";
import "./Header.scss";
import Bouton from "../Bouton/Bouton";

export default function Header({ children }) {
  const [connecte, setConnecte] = useState(false);

  let [utilisateur, setUtilisateur] = useState({ nom: "franck", age : 35 });

  const onDeconnexion = (e) => {
    setConnecte(false);
  };

  const onConnexion = (e) => {
    setConnecte(true);
  };

  const onClicLogo = (e) => {
    utilisateur.nom = "tom"
    setUtilisateur({...utilisateur});
  };

  return (
    <header>
      <div className="conteneur-gauche">
        {utilisateur.nom}
        <img
          onClick={onClicLogo}
          className="logo"
          src={process.env.PUBLIC_URL + "/logo.png"}
          alt="logo"
        />
        {children}
        <ul className="menu">
          <li>
            <Bouton lien={"/"} icone={"gauge"}>
              Accueil
            </Bouton>
          </li>
          {connecte ? (
            <li>
              <Bouton icone={"right-from-bracket"} evenement={onDeconnexion}>
                Déconnexion
              </Bouton>
            </li>
          ) : (
            <li>
              <Bouton icone={"right-to-bracket"} evenement={onConnexion}>
                Connexion
              </Bouton>
            </li>
          )}
        </ul>
      </div>
      <div className="conteneur-droite"></div>
    </header>
  );
}
