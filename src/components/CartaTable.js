import React, { useState, useEffect } from 'react';
import { cartaService } from "../services/carta.service";

const CartaTable = () => {
  const [cartas, setCartas] = useState([]);

  useEffect(() => {
    async function BuscarCartas() {
      let data = await cartaService.buscar();
      setCartas(data);
    }
    BuscarCartas();
  }, []);

  return (
    <div>
      <h1>Lista de items carta</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Precio</th>
            <th>Categoria</th>
          </tr>
        </thead>
        <tbody>
          {cartas.map(carta => (
            <tr key={carta.IdCarta}>
              <td>{carta.IdCarta}</td>
              <td>{carta.Nombre}</td>
              <td>{carta.Descripcion}</td>
              <td>{carta.Precio}</td>
              <td>{carta.Categoria ? 'Sí' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartaTable;