import React, { useState, useEffect } from "react";
import moment from "moment";

import { mesasService } from "../../services/mesas.service";

import MesasBuscar from "./MesasBuscar";
import MesasListado from "./MesasListado";
import MesasRegistro from "./MesasRegistro";

function Mesas() {
  const TituloAccionABMC = {
    A: "(Agregar)",
    B: "(Eliminar)",
    M: "(Modificar)",
    C: "(Consultar)",
    L: "(Listado)",
  };
  const [AccionABMC, setAccionABMC] = useState("L");

  const [Sector, setSector] = useState("");
  const [Capacidad, setCapacidad] = useState(0);

  const [Items, setItems] = useState(null);
  const [Item, setItem] = useState(null); // usado en BuscarporId (Modificar, Consultar)
  const [RegistrosTotal, setRegistrosTotal] = useState(0);
  const [Pagina, setPagina] = useState(1);
  const [Paginas, setPaginas] = useState([]);

  // cargar al "montar" el componente, solo la primera vez (por la dependencia [])
  useEffect(() => {
    async function BuscarMesas() {
      let data = await mesasService.Buscar();
      setItems(data);
      setRegistrosTotal(data.length);
      setPaginas([...Array(Math.ceil(data.length / 10)).keys()].map(x => x + 1));
    }
    BuscarMesas();
  }, []);

  async function Buscar() {
    setAccionABMC("L");
    let data = await mesasService.Buscar();
    setItems(data);
  }

  async function BuscarPorId(item, accionABMC) {
    setAccionABMC(accionABMC);
    let data = await mesasService.BuscarPorId(item);
    setItem(data);
  }

  function Consultar(item) {
    BuscarPorId(item, "C");
  }
  
  function Modificar(item) {
    BuscarPorId(item, "M");
  }

  async function Agregar() {
    setAccionABMC("A");
    setItem({
      IdMesa: 0,
      Sector: '',
      Capacidad: 0,
      Tipo: '',
      Ocupada: false,
    });
  }

  function Imprimir() {
    alert("En desarrollo...");
  }

  async function ActivarDesactivar(item) {
    const resp = window.confirm(
      "Está seguro que quiere " +
        (item.Ocupada ? "desocupar" : "ocupar") +
        " la mesa?"
    );
    if (resp) {
      await mesasService.ActivarDesactivar(item);
      Buscar();
    }
  }

  async function Grabar(item) {
    await mesasService.Grabar(item);
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
        Mesas <small>{TituloAccionABMC[AccionABMC]}</small>
      </div>

      <MesasBuscar
        Sector={Sector}
        setSector={setSector}
        Capacidad={Capacidad}
        setCapacidad={setCapacidad}
        Buscar={Buscar}
        Agregar={Agregar}
      />

      <MesasListado
        Items={Items}
        Consultar={Consultar}
        Modificar={Modificar}
        ActivarDesactivar={ActivarDesactivar}
        Imprimir={Imprimir}
        Pagina={Pagina}
        RegistrosTotal={RegistrosTotal}
        Paginas={Paginas}
        Buscar={Buscar}
      />

      <div className="alert alert-info mensajesAlert">
        <i className="fa fa-exclamation-sign"></i>
        No se encontraron registros...
      </div>

      <MesasRegistro
        AccionABMC={AccionABMC}
        Item={Item}
        setItem={setItem}
        Grabar={Grabar}
        Volver={Volver}
      />
    </div>
  );
}

export { Mesas };
