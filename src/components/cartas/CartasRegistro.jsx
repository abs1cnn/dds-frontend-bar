import React from "react";

export default function CartasRegistro({
  AccionABMC,
  Item,
  setItem,
  Grabar,
  Volver,
}) {
  if (!Item) return null;
  return (
    <form>
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
                className="form-control"
                value={Item?.Activo}
                onChange={(e) => setItem({...Item, Activo: e.target.value})}
              >
                <option value={null}></option>
                <option value={false}>NO</option>
                <option value={true}>SI</option>
              </select>
            </div>
          </div>
        </fieldset>

        {/* Botones Grabar, Cancelar/Volver */}
        <hr />
        <div className="row justify-content-center">
          <div className="col text-center botones">
            {AccionABMC !== "C" && (
              <button type="submit" className="btn btn-primary" onClick={(e) => { e.preventDefault(); Grabar(Item); }}>
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
        <div className="row alert alert-danger mensajesAlert">
          <i className="fa fa-exclamation-sign"></i>
          Revisar los datos ingresados...
        </div>
      </div>
    </form>
  );
}
