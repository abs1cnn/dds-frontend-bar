import React from "react";

export default function MesasBuscar({
  Sector,
  setSector,
  Capacidad,
  setCapacidad,
  Tipo,
  setTipo,
  Buscar,
  Agregar,
}) {
  return (
    <form name="FormBusqueda">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4 col-md-2">
            <label className="col-form-label">Sector:</label>
          </div>
          <div className="col-sm-8 col-md-4">
            <input
              type="text"
              className="form-control"
              onChange={(e) => setSector(e.target.value)}
              value={Sector}
              maxLength="30"
              autoFocus
            />
          </div>
          <div className="col-sm-4 col-md-2">
            <label className="col-form-label">Capacidad:</label>
          </div>
          <div className="col-sm-8 col-md-4">
            <input
              type="number"
              className="form-control"
              onChange={(e) => setCapacidad(e.target.value)}
              value={Capacidad}
              min="1"
            />
          </div>
          <div className="col-sm-4 col-md-2">
            <label className="col-form-label">Tipo:</label>
          </div>
          <div className="col-sm-8 col-md-4">
            <input
              type="text"
              className="form-control"
              onChange={(e) => setTipo(e.target.value)}
              value={Tipo}
              maxLength="30"
            />
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col text-center botones">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => Buscar()}
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
