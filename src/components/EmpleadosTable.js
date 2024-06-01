import React, { useState, useEffect } from 'react';
import { empleadosService } from "../services/empleados.service";

const EmpleadosTable = () => {
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    async function BuscarEmpleados() {
      let data = await empleadosService.Buscar();
      setEmpleados(data);
    }
    BuscarEmpleados();
  }, []);

  return (
    <div>
      <h1>Lista de Empleados</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Fecha de Alta</th>
            <th>Activo</th>
          </tr>
        </thead>
        <tbody>
          {empleados.map(empleado => (
            <tr key={empleado.IdEmpleado}>
              <td>{empleado.IdEmpleado}</td>
              <td>{empleado.Nombre}</td>
              <td>{empleado.Apellido}</td>
              <td>{empleado.FechaAlta}</td>
              <td>{empleado.Activo ? 'Sí' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmpleadosTable;