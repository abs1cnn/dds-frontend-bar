import React from "react";

export default function CartasRegistro({
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
              <label className="col-form-label" htmlFor="Nombre">
                Nombre<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
              <input
                type="text"
                name="Nombre"
                value={Item?.Nombre}
                className="form-control"
                onChange={(e) => setItem({ ...Item, Nombre: e.target.value })}
              />
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
                className="form-control"
                onChange={(e) => setItem({ ...Item, Descripcion: e.target.value })}
              />
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
                className="form-control"
                onChange={(e) => setItem({ ...Item, Precio: e.target.value })}
              />
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
                className="form-control"
                onChange={(e) => setItem({ ...Item, Categoria: e.target.value })}
              />
            </div>
          </div>

          {/* Campo Activo */}
          <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="Activo">
                Activo:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
              <input
                type="checkbox"
                name="Activo"
                checked={Item.Activo}
                onChange={(e) => setItem({ ...Item, Activo: e.target.checked })}
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
