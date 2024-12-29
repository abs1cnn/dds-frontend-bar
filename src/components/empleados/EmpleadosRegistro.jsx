import React, { useState } from "react";

export default function EmpleadosRegistro({
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

    if (!Item.Nombre) {
      newErrors.Nombre = "El Nombre es obligatorio.";
    } else if (Item.Nombre.length > 30) {
      newErrors.Nombre = "El Nombre debe tener menos de 30 caracteres.";
    }
    if (!Item.Apellido) {
      newErrors.Apellido = "El Apellido es obligatorio.";
    } else if (Item.Nombre.length > 30) {
      newErrors.Apellido = "El Apellido debe tener menos de 30 caracteres.";
    }

    if (!Item.Nombre) newErrors.Nombre = "El nombre es obligatorio.";
    if (!Item.Apellido) newErrors.Apellido = "El apellido es obligatorio.";
    if (!Item.FechaAlta) newErrors.FechaAlta = "La fecha de alta es obligatoria.";
    if (Item.Activo === null || Item.Activo === undefined) newErrors.Activo = "El estado activo es obligatorio.";

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
              <label className="col-form-label" htmlFor="Nombre">
                Nombre<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
              <input
                type="text"
                name="Nombre"
                value={Item?.Nombre}
                autoFocus
                className={`form-control ${errors.Nombre ? 'is-invalid' : ''}`}
                onChange={(e) => setItem({...Item, Nombre: e.target.value})}
              />
              {errors.Nombre && <div className="invalid-feedback">{errors.Nombre}</div>}
            </div>
          </div>

          {/* campo Apellido */}
          <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="Apellido">
                Apellido<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
              <input
                type="text"
                name="Apellido"
                value={Item.Apellido}
                className={`form-control ${errors.Apellido ? 'is-invalid' : ''}`}
                onChange={(e) => setItem({...Item, Apellido: e.target.value})}
              />
              {errors.Apellido && <div className="invalid-feedback">{errors.Apellido}</div>}
            </div>
          </div>

          {/* campo FechaAlta */}
          <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="FechaAlta">
                Fecha Alta<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
              <input
                type="date"
                name="FechaAlta"
                className={`form-control ${errors.FechaAlta ? 'is-invalid' : ''}`}
                value={Item?.FechaAlta}
                onChange={(e) => setItem({...Item, FechaAlta: e.target.value})}
              />
              {errors.FechaAlta && <div className="invalid-feedback">{errors.FechaAlta}</div>}
            </div>
          </div>

          {/* campo Activo */}
          <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="Activo">
                Activo<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
              <select
                name="Activo"
                className={`form-control ${errors.Activo ? 'is-invalid' : ''}`}
                value={Item?.Activo}
                onChange={(e) => setItem({...Item, Activo: e.target.value})}
              >
                <option value={null}></option>
                <option value={false}>NO</option>
                <option value={true}>SI</option>
              </select>
              {errors.Activo && <div className="invalid-feedback">{errors.Activo}</div>}
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
