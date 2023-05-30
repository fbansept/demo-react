import React from "react";
import "./Bouton.scss";
import { Link } from "react-router-dom";

export default function Bouton({
  children,
  lien,
  icone,
  evenement,
  desactive,
}) {
  const templateIcone = <i className={`fa-solid fa-${icone}`}></i>;

  if (lien) {
    return desactive ? (
      <a>
        {icone ? templateIcone : ""}
        {children}
      </a>
    ) : (
      <Link to={lien}>
        {icone ? templateIcone : ""}
        {children}
      </Link>
    );
  } else {
    return (
      <button
        disabled={desactive}
        onClick={evenement}
        
        {...(desactive ? { className: "desactive" } : "")}
      >
        {icone ? templateIcone : ""}
        {children}
      </button>
    );
  }
}
