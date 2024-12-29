import React from "react";

export default function CartasBuscar ({Nombre, setNombre, Categoria, setCategoria, Buscar, Agregar}) {
    return (

    // INICIO DE FORMULARIO
    <form name="FormBusqueda">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4 col-md-2">
            <label className="col-form-label">Nombre:</label>
          </div>
          <div className="col-sm-8 col-md-4">
            <input
              type="text"
              className="form-control"
              // ESTE ES EL MANEJADOR DE EVENTOS QUE SE EJECUTA CADA VEZ
              // QUE EL VALOR DE CAMPO DE ENTRADA CAMBIA
              // e ES EL OBJETO DE VENTO QUE CONTIENE INFORMACION SOBRE EL EVENTO QUE OCURRIO
              onChange={(e) => setNombre(e.target.value)}
              // ESPECIFICA EL VALOR ACTUAL DEL CAMPO DE ENTRADA, QUE ESTA ENLAZADO AL ESTADO NOMBRE
              // ESTO HACE QUE EL CAMPO DE ENTRADA SEA UN COMPONENETE CONTROLADO, SU VALOR ES CONTROLADO POR EL ESTADO DE REACT
              value={Nombre}
              maxLength="30"
              // AUTOFOCUS, HACE QUE EL CURSOR INICIE EN ESTE CAMPO, PARA QUE EL USUARIO ARRANQUE A ESCRIBIR
              autoFocus
            />
          </div>
          <div className="col-sm-4 col-md-2">
            <label className="col-form-label">Categoría:</label>
          </div>
          <div className="col-sm-8 col-md-4">
            <input
              type="text"
              className="form-control"
              onChange={(e) => setCategoria(e.target.value)}
              value={Categoria}
              maxLength="30"
            />
          </div>
        </div>
  
        <hr />
  
        {/* Botones */}
        <div className="row">
          <div className="col text-center botones">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => Buscar(1) }
          >
            <i className="fa fa-search"> </i> Buscar
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => Agregar() }
          >
            <i className="fa fa-plus"> </i> Agregar
          </button>
          </div>
        </div>
      </div>
    </form>
    )
};
