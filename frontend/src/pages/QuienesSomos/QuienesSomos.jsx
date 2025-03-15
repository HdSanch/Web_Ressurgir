import React from "react";
import Introduccion from "./Introduccion";
import MisionVision from "./MisionVision";
import Valores from "./Valores";
import Equipo from "./Equipo";

const QuienesSomos = () => {
  return (
    <div className="bg-gray-100">
      <Introduccion />
      <MisionVision />
      <Valores />
      <Equipo />
    </div>
  );
};

export default QuienesSomos;