import React, { useState, useEffect } from "react";
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

  // Cargar al "montar" el componente, solo la primera vez (por la dependencia [])
  useEffect(() => {
    async function BuscarPedidos() {
      let data = await pedidosService.Buscar();
      setItems(data);
    }
    BuscarPedidos();
  }, []);

  // Función para buscar pedidos
  async function Buscar() {
    setAccionABMC("L");
    let data = await pedidosService.Buscar();
    if (FechaAlta) {
      data = data.filter((pedido) =>
        pedido.FechaAlta.toLowerCase().includes(FechaAlta.toLowerCase())
      );
    }
    if (IdEmpleado) {
      data = data.filter((pedido) => pedido.IdEmpleado === parseInt(IdEmpleado, 10));
    }
    if (Precio) {
      data = data.filter((pedido) => pedido.Precio === parseInt(Precio, 10));
    }
    setItems(data);
  }

  // Función para consultar un pedido
  function Consultar(item) {
    setAccionABMC("C");
    setItem(item);
  }

  // Función para modificar un pedido
  function Modificar(item) {
    setAccionABMC("M");
    setItem(item);
  }

  // Función para agregar un nuevo pedido
  async function Agregar() {
    setAccionABMC("A");
    setItem({
      IdPedido: 0,
      FechaAlta: "",
      Precio: 0,
      IdEmpleado: 0,
    });
  }

  // Función para guardar un pedido (tanto agregar como modificar)
  async function Grabar(item) {
    await pedidosService.Grabar(item);
    await Buscar();
  }

  // Función para volver a la lista de pedidos
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
        setFechaAlta={setFechaAlta}
        Consultar={Consultar}
        Modificar={Modificar}
        Buscar={Buscar}
      />

      {AccionABMC !== "L" && (
        <PedidosRegistro
          AccionABMC={AccionABMC}
          Item={Item}
          setItem={setItem}
          Grabar={Grabar}
          Volver={Volver}
        />
      )}
    </div>
  );
}

export { Pedidos };
