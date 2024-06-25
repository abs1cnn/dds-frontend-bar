import React, { useState } from "react";

export default function CartasRegistro({
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
      newErrors.Nombre = "El nombre es obligatorio.";
    }

    if (!Item.Descripcion) {
      newErrors.Descripcion = "La descripción es obligatoria.";
    }

    if (!Item.Precio || Item.Precio <= 0) {
      newErrors.Precio = "El precio es obligatorio y debe ser mayor que 0.";
    }

    if (!Item.Categoria) {
      newErrors.Categoria = "La categoría es obligatoria.";
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
                onChange={(e) => setItem({ ...Item, Nombre: e.target.value })}
              />
              {errors.Nombre && <div className="invalid-feedback">{errors.Nombre}</div>}
            </div>
          </div>

          {/* Campo Descripcion */}
          <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="Descripcion">
                Descripción<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
              <input
                type="text"
                name="Descripcion"
                value={Item.Descripcion}
                className={`form-control ${errors.Descripcion ? 'is-invalid' : ''}`}
                onChange={(e) => setItem({ ...Item, Descripcion: e.target.value })}
              />
              {errors.Descripcion && <div className="invalid-feedback">{errors.Descripcion}</div>}
            </div>
          </div>

          {/* Campo Precio */}
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

          {/* Campo Categoria */}
          <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="Categoria">
                Categoría<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
              <input
                type="text"
                name="Categoria"
                value={Item.Categoria}
                className={`form-control ${errors.Categoria ? 'is-invalid' : ''}`}
                onChange={(e) => setItem({ ...Item, Categoria: e.target.value })}
              />
              {errors.Categoria && <div className="invalid-feedback">{errors.Categoria}</div>}
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
                onChange={(e) => setItem({ ...Item, Activo: e.target.value })}
              >
                <option value=""></option>
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
