import React from "react";

export default function PedidosRegistro({
  AccionABMC,
  Item,
  setItem,
  Grabar,
  Volver,
}) {
  if (!Item) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    Grabar(Item);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container-fluid">
        <fieldset disabled={AccionABMC === "C"}>
          <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="FechaAlta">
                Fecha Alta<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
              <input
                type="text"
                name="FechaAlta"
                value={Item?.FechaAlta}
                className="form-control"
                onChange={(e) => setItem({ ...Item, FechaAlta: e.target.value })}
              />
            </div>
          </div>

          {/* Campo precio */}
          <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="Precio">
                Precio<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
              <input
                type="number"
                name="Precio"
                value={Item.Precio}
                className="form-control"
                onChange={(e) => setItem({ ...Item, Precio: e.target.value })}
              />
            </div>
          </div>

          {/* Campo ID Empleado */}
          <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="IdEmpleado">
                ID Empleado<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
              <input
                type="number"
                name="IdEmpleado"
                value={Item.IdEmpleado}
                className="form-control"
                onChange={(e) => setItem({ ...Item, IdEmpleado: e.target.value })}
              />
            </div>
          </div>
        </fieldset>

        {/* Botones Grabar, Cancelar/Volver */}
        <hr />
        <div className="row justify-content-center">
          <div className="col text-center botones">
            {AccionABMC !== "C" && (
              <button type="submit" className="btn btn-primary">
                <i className="fa fa-check"></i> Grabar
              </button>
            )}
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => Volver()}
            >
              <i className="fa fa-undo"></i>
              {AccionABMC === "C" ? " Volver" : " Cancelar"}
            </button>
          </div>
        </div>

        <div className="row alert alert-danger mensajesAlert">
          <i className="fa fa-exclamation-sign"></i>
          Revisar los datos ingresados...
        </div>
      </div>
    </form>
  );
}
