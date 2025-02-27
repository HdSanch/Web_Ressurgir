import React from "react";
import Historia from "./Historia";
import MisionVision from "./MisionVision";
import Equipo from "./Equipo";
import "../../styles/QuienesSomos.css"; // Puedes crear este archivo de estilos si lo deseas

const QuienesSomos = () => {
  return (
    <div className="quienes-somos-container">
      <h1>Quiénes Somos</h1>
      <Historia />
      <MisionVision />
      <Equipo />
    </div>
  );
};

export default QuienesSomos;
