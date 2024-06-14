import React from "react";
import moment from "moment";

export default function PedidosListado({ Items, Consultar, Modificar, Buscar }) {
  return (
    <div className="table-responsive">
      <table className="table table-hover table-sm table-bordered table-striped">
        <thead>
          <tr>
            <th className="text-center">Fecha Alta</th>
            <th className="text-center">Precio</th>
            <th className="text-center">ID Empleado</th>
            <th className="text-center text-nowrap">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {Items &&
            Items.map((pedido) => (
              <tr key={pedido.IdPedido}>
                <td className="text-center">
                  {moment(pedido.FechaAlta).format("MM/DD/YYYY")}
                </td>
                <td className="text-center">{pedido.Precio}</td>
                <td className="text-center">{pedido.IdEmpleado} - {pedido.NombreEmpleado}</td>
                <td className="text-center text-nowrap">
                  <button
                    className="btn btn-sm btn-outline-primary"
                    title="Consultar"
                    onClick={() => Consultar(pedido)}
                  >
                    <i className="fa fa-eye"></i>
                  </button>
                  <button
                    className="btn btn-sm btn-outline-primary"
                    title="Modificar"
                    onClick={() => Modificar(pedido)}
                  >
                    <i className="fa fa-pencil"></i>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
