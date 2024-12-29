import React, { useState } from "react";

export default function PedidosRegistro({
  AccionABMC,
  Item,
  setItem,
  Grabar,
  Volver,
}) {
  const [errors, setErrors] = useState({});

  if (!Item) return null;

  const validate = () => {
    const newErrors = {};

    if (!Item.FechaAlta) {
      newErrors.FechaAlta = "La fecha de alta es obligatoria.";
    } else {
      const datePattern = /^\d{4}-\d{2}-\d{2}$/; // Assumes date format is YYYY-MM-DD
      if (!datePattern.test(Item.FechaAlta)) {
        newErrors.FechaAlta = "La fecha de alta debe estar en formato válido (AAAA-MM-DD).";
      }
    }

    if (!Item.Precio || Item.Precio <= 0) {
      newErrors.Precio = "El precio es obligatorio y debe ser mayor que 0.";
    }

    if (!Item.IdEmpleado) {
      newErrors.IdEmpleado = "El ID del empleado es obligatorio.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      Grabar(Item);
    }
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
                className={`form-control ${errors.FechaAlta ? 'is-invalid' : ''}`}
                onChange={(e) => setItem({ ...Item, FechaAlta: e.target.value })}
              />
              {errors.FechaAlta && <div className="invalid-feedback">{errors.FechaAlta}</div>}
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
                className={`form-control ${errors.Precio ? 'is-invalid' : ''}`}
                onChange={(e) => setItem({ ...Item, Precio: e.target.value })}
              />
              {errors.Precio && <div className="invalid-feedback">{errors.Precio}</div>}
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
                className={`form-control ${errors.IdEmpleado ? 'is-invalid' : ''}`}
                onChange={(e) => setItem({ ...Item, IdEmpleado: e.target.value })}
              />
              {errors.IdEmpleado && <div className="invalid-feedback">{errors.IdEmpleado}</div>}
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

        {/* texto: Revisar los datos ingresados... */}
        {Object.keys(errors).length > 0 && (
          <div className="row alert alert-danger mensajesAlert">
            <i className="fa fa-exclamation-sign"></i>
            Revisar los datos ingresados...
          </div>
        )}
      </div>
    </form>
  );
}
