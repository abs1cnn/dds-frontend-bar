import React, { useState, useEffect } from 'react';
import { mesaService } from "../services/mesa.service";

const MesasTable = () => {
  const [mesas, setMesa] = useState([]);

  useEffect(() => {
    async function BuscarMesas() {
      let data = await mesaService.Buscar();
      setMesa(data);
    }
    BuscarMesas();
  }, []);

  return (
    <div>
      <h1>Lista de Mesas</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Sector</th>
            <th>Ocupada</th>
            <th>Capacidad</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {mesas.map(mesa => (
            <tr key={mesa.IdMesa}>
              <td>{mesa.IdMesa}</td>
              <td>{mesa.Sector}</td>
              <td>{mesa.Ocupada? 'Sí' : 'No'}</td>
              <td>{mesa.Capacidad}</td>
              <td>{mesa.Tipo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MesasTable;