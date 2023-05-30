import React from "react";
import Bouton from "../../common/Bouton/Bouton";

export default function Connexion() {
  const onConnexion = (e) => alert("connecté");

  return (
    <form>
      <div class="field">
        <label>Email</label>
        <input></input>
      </div>
      <div class="field">
        <label>Password</label>
        <input type="password"></input>
      </div>
      <div class="field">
        <Bouton lien="/">Annuler</Bouton>
        <Bouton evenement={onConnexion} desactive={true}>
          Se connecter
        </Bouton>
      </div>
    </form>
  );
}
