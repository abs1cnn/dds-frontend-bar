// esta no muestra nombre y apellido, muestra id. 
// ya lo cambie poniendo {Item.Apellido} y {Item.Nombre}. pero no

import React from "react";
import moment from "moment";

export default function PedidosListado({
  Items,
  Consultar,
  Modificar,
  Pagina,
  RegistrosTotal,
  Paginas,
  Buscar,
}) {
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
            Items.map((Item) => (
              <tr key={Item.IdPedido}>
                <td className="text-center">
                  {moment(Item.FechaAlta).format("MM/DD/YYYY")}
                </td>
                <td className="text-center">{Item.Precio}</td>
                <td className="text-center">{Item.IdEmpleado}</td>
                <td className="text-center text-nowrap">
                  <button
                    className="btn btn-sm btn-outline-primary"
                    title="Consultar"
                    onClick={() => Consultar(Item)}
                  >
                    <i className="fa fa-eye"></i>
                  </button>
                  <button
                    className="btn btn-sm btn-outline-primary"
                    title="Modificar"
                    onClick={() => Modificar(Item)}
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
