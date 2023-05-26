import React from "react";
import "./Header.scss";

export default function Header() {
  return (
    <header>
      <div className="conteneur-gauche">
        <img
          className="logo"
          src={process.env.PUBLIC_URL + "/logo.png"}
          alt="logo"
        />
        <ul className="menu">
          <li>Dashboard</li>
          <li>Utilisateurs</li>
          <li>Produits</li>
          <li>Catégories</li>
        </ul>
      </div>
      <div className="conteneur-droite"></div>
    </header>
  );
}
