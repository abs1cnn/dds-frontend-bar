import React, { useState, useEffect } from 'react';
import { pedidosService } from "../services/pedidos.service";

const PedidosTable = () => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    async function BuscarPedidos() {
      let data = await pedidosService.Buscar();
      setPedidos(data);
    }
    BuscarPedidos();
  }, []);

  return (
    <div>
      <h1>Lista de Pedidos</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Fecha</th>
            <th>Monto</th>
            <th>IdEmpleado</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map(pedido => (
            <tr key={pedido.IdPedido}>
              <td>{pedido.Fecha}</td>
              <td>{pedido.Monto}</td>
              <td>{pedido.IdEmpleado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PedidosTable;