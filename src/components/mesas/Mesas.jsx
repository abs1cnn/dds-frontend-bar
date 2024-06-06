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
  const [Tipo, setTipo] = useState("");
  const [Ocupada, setOcupada] = useState("");

  const [Items, setItems] = useState(null);
  const [Item, setItem] = useState(null); // usado en BuscarporId (Modificar, Consultar)
  const [RegistrosTotal, setRegistrosTotal] = useState(0);
  const [Pagina, setPagina] = useState(1);
  const [Paginas, setPaginas] = useState([]);

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
    // Filtrar los datos según el Sector y Capacidad
    if (Sector) {
      data = data.filter(mesa => mesa.Sector.toLowerCase().includes(Sector.toLowerCase()));
    }
    if (Capacidad) {
      data = data.filter(mesa => mesa.Capacidad === parseInt(Capacidad, 10));
    }
    if (Tipo) {
      data = data.filter(mesa => mesa.Tipo.toLowerCase().includes(Tipo.toLowerCase()));
    }
    if (Ocupada !== "") {
      const isOcupada = Ocupada === "true" ? true : Ocupada === "false" ? false : "";
      data = data.filter(mesa => mesa.Ocupada === (isOcupada ? 1 : 0));
    }
    setItems(data);
    setRegistrosTotal(data.length);
    setPaginas([...Array(Math.ceil(data.length / 10)).keys()].map(x => x + 1));
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
        Tipo={Tipo}
        setTipo={setTipo}
        Ocupada={Ocupada}
        setOcupada={setOcupada}
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

      {Items && Items.length === 0 && (
        <div className="alert alert-info mensajesAlert">
          <i className="fa fa-exclamation-sign"></i>
          No se encontraron registros...
        </div>
      )}

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
