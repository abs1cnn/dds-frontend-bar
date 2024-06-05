import React, { useState, useEffect } from "react";
import moment from "moment";

import { empleadosService } from "../../services/empleados.service";

import EmpleadosBuscar from "./EmpleadosBuscar";
import EmpleadosListado from "./EmpleadosListado";
import EmpleadosRegistro from "./EmpleadosRegistro";

function Empleados() {
  const TituloAccionABMC = {
    A: "(Agregar)",
    B: "(Eliminar)",
    M: "(Modificar)",
    C: "(Consultar)",
    L: "(Listado)",
  };
  const [AccionABMC, setAccionABMC] = useState("L");

  const [Nombre, setNombre] = useState("");
  const [Apellido, setApellido] = useState("");

  const [Items, setItems] = useState(null);
  const [Item, setItem] = useState(null); // usado en BuscarporId (Modificar, Consultar)
  const [RegistrosTotal, setRegistrosTotal] = useState(0);
  const [Pagina, setPagina] = useState(1);
  const [Paginas, setPaginas] = useState([]);

  // cargar al "montar" el componente, solo la primera vez (por la dependencia [])
  useEffect(() => {
    async function BuscarEmpleados() {
      let data = await empleadosService.Buscar();
      setItems(data);
      setRegistrosTotal(data.length);
      setPaginas([...Array(Math.ceil(data.length / 10)).keys()].map(x => x + 1));
    }
    BuscarEmpleados();
  }, []);

  async function Buscar() {
    setAccionABMC("L");
    let data = await empleadosService.Buscar();
    if (Nombre) {
      data = data.filter(empleado => empleado.Nombre.toLowerCase().includes(Nombre.toLowerCase()));
    }
    if (Apellido) {
      data = data.filter(empleado => empleado.Apellido.toLowerCase().includes(Apellido.toLowerCase()));
    }
    setItems(data);
  }

  async function BuscarPorId(item, accionABMC) {
    setAccionABMC(accionABMC);
    let data = await empleadosService.BuscarPorId(item);
    setItem(data);
  }

  function Consultar(item) {
    BuscarPorId(item, "C");
  }
  
  function Modificar(item) {
    if (!item.Activo) {
      alert("No puede modificarse un registro Inactivo.");
      return;
    }
    BuscarPorId(item, "M");
  }

  async function Agregar() {
    setAccionABMC("A");
    setItem({
      IdEmpleado: 0,
      Nombre: '',
      Apellido: '',
      FechaAlta: moment(new Date()).format("YYYY-MM-DD"),
      Activo: true,
    });
  }

  function Imprimir() {
    alert("En desarrollo...");
  }

  async function ActivarDesactivar(item) {
    const resp = window.confirm(
      "Está seguro que quiere " +
        (item.Activo ? "desactivar" : "activar") +
        " el registro?"
    );
    if (resp) {
      await empleadosService.ActivarDesactivar(item);
      Buscar();
    }
  }

  async function Grabar(item) {
    await empleadosService.Grabar(item);
    alert("Registro " + (AccionABMC === "A" ? "agregado" : "modificado") + " correctamente.");
    Volver();
  }

  // Volver/Cancelar desde Agregar/Modificar/Consultar
  function Volver() {
    setAccionABMC("L");
  }

  return (
    <div>
      <div className="tituloPagina">
        Empleados <small>{TituloAccionABMC[AccionABMC]}</small>
      </div>

      <EmpleadosBuscar
        Nombre={Nombre}
        setNombre={setNombre}
        setApellido={setApellido}
        Buscar={Buscar}
        Agregar={Agregar}
      />

      {/* Tabla de resultados de búsqueda y Paginador */}
      <EmpleadosListado
        {...{
          Items,
          Consultar,
          Modificar,
          ActivarDesactivar,
          Imprimir,
          Pagina,
          RegistrosTotal,
          Paginas,
          Buscar,
        }}
      />

      <div className="alert alert-info mensajesAlert">
        <i className="fa fa-exclamation-sign"></i>
        No se encontraron registros...
      </div>

      {/* Formulario de alta/modificación/consulta */}
      <EmpleadosRegistro
        {...{ AccionABMC, Item, setItem, Grabar, Volver }}
      />
    </div>
  );
}

export { Empleados };
