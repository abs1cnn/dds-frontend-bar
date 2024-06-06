import React, { useState, useEffect } from "react";
import moment from "moment";

import { pedidosService } from "../../services/pedidos.service";

import PedidosBuscar from "./PedidosBuscar";
import PedidosListado from "./PedidosListado";
import PedidosRegistro from "./PedidosRegistro";

function Pedidos() {
  const TituloAccionABMC = {
    A: "(Agregar)",
    B: "(Eliminar)",
    M: "(Modificar)",
    C: "(Consultar)",
    L: "(Listado)",
  };
  const [AccionABMC, setAccionABMC] = useState("L");

  const [FechaAlta, setFechaAlta] = useState("");
  const [Precio, setPrecio] = useState("");
  const [IdEmpleado, setIdEmpleado] = useState("");

  const [Items, setItems] = useState(null);
  const [Item, setItem] = useState(null); 
  const [RegistrosTotal, setRegistrosTotal] = useState(0);
  const [Pagina, setPagina] = useState(1);
  const [Paginas, setPaginas] = useState([]);

  // cargar al "montar" el componente, solo la primera vez (por la dependencia [])
  useEffect(() => {
    async function BuscarPedidos() {
      let data = await pedidosService.Buscar();
      setItems(data);
    }
    BuscarPedidos();
  }, []);

  async function Buscar() {
    setAccionABMC("L");
      let data = await pedidosService.Buscar();
      if (FechaAlta) {
        data = data.filter(pedido => pedido.FechaAlta.toLowerCase().includes(FechaAlta.toLowerCase()));
      }
      if (Precio) {
        data = data.filter(pedido => pedido.Precio === parseInt(Precio, 10));
      }
    setItems(data);
  }

  function Consultar(item) {
    setAccionABMC("C");
    setItem(item);
  }

  function Modificar(item) {
    setAccionABMC("M");
    setItem(item);
  }

  async function Agregar() {
    setAccionABMC("A");
    setItem({
      IdPedido: 0,
      FechaAlta: "",
      Precio: 0,
      IdEmpleado: 0,
    });
  }

  function Volver() {
    setAccionABMC("L");
    setItem(null);
  }

  return (
    <div>
      <div className="tituloPagina">
        Pedidos <small>{TituloAccionABMC[AccionABMC]}</small>
      </div>

      <PedidosBuscar
        FechaAlta={FechaAlta}
        setFechaAlta={setFechaAlta}
        Precio={Precio}
        setPrecio={setPrecio}
        IdEmpleado={IdEmpleado}
        setIdEmpleado={setIdEmpleado}
        Buscar={Buscar}
        Agregar={Agregar}
      />

      <PedidosListado
        Items={Items}
        Consultar={Consultar}
        Modificar={Modificar}
        Pagina={Pagina}
        RegistrosTotal={RegistrosTotal}
        Paginas={Paginas}
        Buscar={Buscar}
      />

      {AccionABMC !== "C" && (
        <PedidosRegistro
          AccionABMC={AccionABMC}
          Item={Item}
          Grabar={() => {}}
          Volver={Volver}
        />
      )}
    </div>
  );
}
export { Pedidos };
