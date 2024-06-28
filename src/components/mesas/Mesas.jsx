import React, { useState, useEffect, useCallback } from "react";
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
  const [Items, setItems] = useState([]);
  const [Item, setItem] = useState(null);


  const fetchMesas = useCallback(async () => {
    try {
      const data = await mesasService.Buscar();
      setItems(data);
    } catch (error) {
      console.error("Error fetching mesas:", error);
    }
  }, []);
  useEffect(() => {
    fetchMesas();
  }, [fetchMesas]);


  const Buscar = useCallback(async () => {
    setAccionABMC("L");
    try {
      let data = await mesasService.Buscar();
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
    } catch (error) {
      console.error("Error searching mesas:", error);
    }
  }, [Sector, Capacidad, Tipo, Ocupada]);

  const BuscarPorId = useCallback(async (item, accionABMC) => {
    setAccionABMC(accionABMC);
    try {
      const data = await mesasService.BuscarPorId(item);
      setItem(data);
    } catch (error) {
      console.error("Error fetching mesa by id:", error);
    }
  }, []);

  const Consultar = useCallback((item) => {
    BuscarPorId(item, "C");
  }, [BuscarPorId]);

  const Modificar = useCallback((item) => {
    if (!item.Activo) {
      alert("No puede modificarse un registro Inactivo.");
      return;
    }
    BuscarPorId(item, "M");
  }, [BuscarPorId]);

  const Agregar = useCallback(() => {
    setAccionABMC("A");
    setItem({
      IdMesa: 100,
      Sector: '',
      Capacidad: 0,
      Tipo: '',
      Ocupada: false,
    });
    alert("Preparando el alta...");
  }, []);

  const Imprimir = useCallback(() => {
    alert("En desarrollo...");
  }, []);

  const ActivarDesactivar = useCallback(async (item) => {
    const resp = window.confirm(
      "Está seguro que quiere " +
        (item.Ocupada ? "desocupar" : "ocupar") +
        " la mesa?"
    );
    if (resp) {
      try {
        await mesasService.ActivarDesactivar(item);
        Buscar();
      } catch (error) {
        console.error("Error activating/deactivating mesa:", error);
      }
    }
  }, [Buscar]);

  const Grabar = useCallback(async (item) => {
    try {
      await mesasService.Grabar(item);
      alert("Registro " + (AccionABMC === "A" ? "agregado" : "modificado") + " correctamente.");
      Volver();
    } catch (error) {
      console.error("Error saving mesa:", error);
    }
  }, [AccionABMC]);

  const Volver = useCallback(() => {
    setAccionABMC("L");
  }, []);

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
        Buscar={Buscar}
      />

      {Items.length === 0 && (
        <div className="alert alert-info mensajesAlert">
          <i className="fa fa-exclamation-sign"></i> No se encontraron registros...
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
