import React, { useState, useEffect } from "react";
import Sidemenu from "../../common/Sidemenu/Sidemenu";

export default function Accueil() {
  const [listeTache, setListeTache] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((listeTache) => setListeTache(listeTache));
  }, []);

  const [listePersonne, setListePersonne] = useState([
    { id: 1, nom: "Franck" },
    { id: 2, nom: "Tom" },
    { id: 3, nom: "Julie" },
  ]);

  const onAjoutPersonne = (e) => {
    setListePersonne([
      ...listePersonne,
      { id: listePersonne.length + 1, nom: "nouveau" },
    ]);
  };

  return (
    <div className="main">
      <Sidemenu></Sidemenu>
      <div className="content">
        <ul>
          {listePersonne.map((personne) => (
            <li key={personne.id}>{personne.nom}</li>
          ))}
        </ul>

        <button onClick={onAjoutPersonne}>Ajouter</button>

        <table>
          <thead>
            <tr>
              <th>Titre</th>
              <th>Terminée</th>
            </tr>
          </thead>
          <tbody>
            {listeTache.map((tache) => (
              <tr key={tache.id}>
                <td>{tache.title}</td>
                <td>{tache.completed ? "oui" : "non"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
