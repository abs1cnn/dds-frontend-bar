import React, { useState, useEffect, useCallback } from "react";
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
  const [Activo, setActivo] = useState("");
  const [Items, setItems] = useState([]);
  const [Item, setItem] = useState(null);

  const fetchEmpleados = useCallback(async () => {
    try {
      const data = await empleadosService.Buscar();
      setItems(data);
    } catch (error) {
      console.error("Error fetching empleados:", error);
    }
  }, []);

  useEffect(() => {
    fetchEmpleados();
  }, [fetchEmpleados]);

  const Buscar = useCallback(async () => {
    setAccionABMC("L");
    try {
      let data = await empleadosService.Buscar();
      if (Nombre) {
        data = data.filter(empleado => empleado.Nombre.toLowerCase().includes(Nombre.toLowerCase()));
      }
      if (Apellido) {
        data = data.filter(empleado => empleado.Apellido.toLowerCase().includes(Apellido.toLowerCase()));
      }
      if (Activo !== "") {
        const isActivo = Activo === "true" ? true : Activo === "false" ? false : "";
        data = data.filter(empleado => empleado.Activo === (isActivo ? 1 : 0));
      }
      setItems(data);
    } catch (error) {
      console.error("Error searching empleados:", error);
    }
  }, [Nombre, Apellido, Activo]);

  const BuscarPorId = useCallback(async (item, accionABMC) => {
    setAccionABMC(accionABMC);
    try {
      const data = await empleadosService.BuscarPorId(item);
      setItem(data);
    } catch (error) {
      console.error("Error fetching empleado by id:", error);
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
      IdEmpleado: 100,
      Nombre: '',
      Apellido: '',
      FechaAlta: moment(new Date()).format("YYYY-MM-DD"),
      Activo: true,
    });
    alert("preparando el Alta...");
  }, []);

  const Imprimir = useCallback(() => {
    alert("En desarrollo...");
  }, []);

  const ActivarDesactivar = useCallback(async (item) => {
    const resp = window.confirm(
      "Está seguro que quiere " + (item.Activo ? "desactivar" : "activar") + " el registro?"
    );
    if (resp) {
      try {
        await empleadosService.ActivarDesactivar(item);
        Buscar();
      } catch (error) {
        console.error("Error activating/deactivating empleado:", error);
      }
    }
  }, [Buscar]);

  const Grabar = useCallback(async (item) => {
    try {
      await empleadosService.Grabar(item);
      alert("Registro " + (AccionABMC === "A" ? "agregado" : "modificado") + " correctamente.");
      Volver();
    } catch (error) {
      console.error("Error saving empleado:", error);
    }
  }, [AccionABMC]);

  const Volver = useCallback(() => {
    setAccionABMC("L");
  }, []);

  return (
    <div>
      <div className="tituloPagina">
        Empleados <small>{TituloAccionABMC[AccionABMC]}</small>
      </div>

      <EmpleadosBuscar
        Nombre={Nombre}
        setNombre={setNombre}
        Apellido={Apellido}
        setApellido={setApellido}
        Activo={Activo}
        setActivo={setActivo}
        Buscar={Buscar}
        Agregar={Agregar}
      />

      <EmpleadosListado
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

      <EmpleadosRegistro
        AccionABMC={AccionABMC}
        Item={Item}
        setItem={setItem}
        Grabar={Grabar}
        Volver={Volver}
      />
    </div>
  );
}

export { Empleados };
