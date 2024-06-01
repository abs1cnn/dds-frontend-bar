import React from 'react';
import { Link } from 'react-router-dom';
import './Inicio.css';  // Asegúrate de crear un archivo CSS para los estilos

function Inicio() {
  return (
    <div className="button-container">
      <div>
      <Link to="/empleados">
        <button className="big-button">Empleados</button>
      </Link>
      <Link to="/pedidos">
        <button className="big-button">Pedidos</button>
      </Link>
      </div>
      <div>
      <Link to="/page3">
        <button className="big-button">Carta</button>
      </Link>
      <Link to="/page4">
        <button className="big-button">Mesas</button>
      </Link>
      </div>
    </div>
  );
}

export {Inicio};