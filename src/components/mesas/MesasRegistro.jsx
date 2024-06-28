import React, { useState } from "react";

export default function MesasRegistro({
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
    if (!Item.Sector) {
      newErrors.Sector = "El sector es obligatorio.";
    } else if (Item.Sector.length > 30) {
      newErrors.Sector = "El sector debe tener menos de 30 caracteres.";
    }

    if (!Item.Sector) newErrors.Sector = "El sector es obligatorio.";
    if (!Item.Capacidad || Item.Capacidad <= 0) newErrors.Capacidad = "La capacidad es obligatoria y debe ser mayor que 0.";
    if (!Item.Tipo) newErrors.Tipo = "El tipo es obligatorio.";
    if (Item.Ocupada === null || Item.Ocupada === undefined) newErrors.Ocupada = "El estado ocupada es obligatorio.";
    if (!Item.IdEmpleado) newErrors.IdEmpleado = "El ID del empleado es obligatorio.";

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
              <label className="col-form-label" htmlFor="Sector">
                Sector<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
              <input
                type="text"
                name="Sector"
                value={Item?.Sector}
                autoFocus
                className={`form-control ${errors.Sector ? 'is-invalid' : ''}`}
                onChange={(e) => setItem({...Item, Sector: e.target.value})}
              />
              {errors.Sector && <div className="invalid-feedback">{errors.Sector}</div>}
            </div>
          </div>

          {/* campo Capacidad */}
          <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="Capacidad">
                Capacidad<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
              <input
                type="number"
                name="Capacidad"
                value={Item?.Capacidad}
                className={`form-control ${errors.Capacidad ? 'is-invalid' : ''}`}
                onChange={(e) => setItem({...Item, Capacidad: e.target.value})}
              />
              {errors.Capacidad && <div className="invalid-feedback">{errors.Capacidad}</div>}
            </div>
          </div>

          {/* campo Tipo */}
          <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="Tipo">
                Tipo<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
              <input
                type="text"
                name="Tipo"
                value={Item?.Tipo}
                className={`form-control ${errors.Tipo ? 'is-invalid' : ''}`}
                onChange={(e) => setItem({...Item, Tipo: e.target.value})}
              />
              {errors.Tipo && <div className="invalid-feedback">{errors.Tipo}</div>}
            </div>
          </div>

          {/* campo Ocupada */}
          <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="Ocupada">
                Ocupada<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
              <select
                name="Ocupada"
                className={`form-control ${errors.Ocupada ? 'is-invalid' : ''}`}
                value={Item?.Ocupada}
                onChange={(e) => setItem({...Item, Ocupada: e.target.value})}
              >
                <option value={false}>NO</option>
                <option value={true}>SI</option>
              </select>
              {errors.Ocupada && <div className="invalid-feedback">{errors.Ocupada}</div>}
            </div>
          </div>

          {/* campo IdEmpleado */}
          <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="IdEmpleado">
                Empleado<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
              <input
                type="number"
                name="IdEmpleado"
                value={Item?.IdEmpleado}
                className={`form-control ${errors.IdEmpleado ? 'is-invalid' : ''}`}
                onChange={(e) => setItem({...Item, IdEmpleado: e.target.value})}
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
