import React from "react";
import "./Header.scss";
import Bouton from "../Bouton/Bouton";

const onDeconnexion = (e) => {
  alert("Deconnexion");
};

export default function Header({ children }) {
  return (
    <header>
      <div className="conteneur-gauche">
        <img
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
          <li>
            <Bouton lien={"/connexion"} icone={"right-to-bracket"}>
              Connexion
            </Bouton>
          </li>
          <li>
            <Bouton icone={"right-from-bracket"} evenement={onDeconnexion}>
              Déconnexion
            </Bouton>
          </li>
        </ul>
      </div>
      <div className="conteneur-droite"></div>
    </header>
  );
}
