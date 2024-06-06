import React from "react";

export default function PedidosBuscar({
  FechaAlta,
  setFechaAlta,
  Precio,
  setPrecio,
  IdEmpleado,
  setIdEmpleado,
  Buscar,
  Agregar
}) {
  return (
    <form name="FormBusqueda">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4 col-md-2">
            <label className="col-form-label">Fecha Alta:</label>
          </div>
          <div className="col-sm-8 col-md-4">
            <input
              type="text"
              className="form-control"
              onChange={(e) => setFechaAlta(e.target.value)}
              value={FechaAlta}
            />
          </div>
          <div className="col-sm-4 col-md-2">
            <label className="col-form-label">Precio:</label>
          </div>
          <div className="col-sm-8 col-md-4">
            <input
              type="number"
              className="form-control"
              onChange={(e) => setPrecio(e.target.value)}
              value={Precio}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4 col-md-2">
            <label className="col-form-label">ID Empleado:</label>
          </div>
          <div className="col-sm-8 col-md-4">
            <input
              type="number"
              className="form-control"
              onChange={(e) => setIdEmpleado(e.target.value)}
              value={IdEmpleado}
            />
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col text-center botones">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => Buscar(1)}
            >
              <i className="fa fa-search"> </i> Buscar
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => Agregar()}
            >
              <i className="fa fa-plus"> </i> Agregar
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
