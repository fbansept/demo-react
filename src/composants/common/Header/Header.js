import React from "react";
import "./Header.scss";
import Bouton from "../Bouton/Bouton";

export default function Header({ children , setConnecte, connecte }) {
  
  const onDeconnexion = (e) => {
    setConnecte(false);
  };

  const onConnexion = (e) => {
    setConnecte(true);
  };

  // const onClicLogo = (e) => {
  //   //listePrenom.push("nouvel utilisateur");

  //   const infoSupplementaires = { ville: "Belfort", genre : "homme"};

  //   const franckPlus =  {...utilisateur , ...infoSupplementaires}

  //   setListePrenom([...listePrenom, "nouvel utiliateur"]);
  //   console.log(listePrenom.length);
  // };

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
