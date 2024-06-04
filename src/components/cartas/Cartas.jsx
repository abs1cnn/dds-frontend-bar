import React, { useState, useEffect } from "react";
import moment from "moment";

import { cartasService } from "../../services/cartas.service";

import CartasBuscar from "./CartasBuscar";
import CartasListado from "./CartasListado";
import CartasRegistro from "./CartasRegistro";

function Cartas() {
  const TituloAccionABMC = {
    A: "(Agregar)",
    B: "(Eliminar)",
    M: "(Modificar)",
    C: "(Consultar)",
    L: "(Listado)",
  };
  const [AccionABMC, setAccionABMC] = useState("L");

  const [Nombre, setNombre] = useState("");
  const [Categoria, setCategoria] = useState("");

  const [Items, setItems] = useState(null);
  const [Item, setItem] = useState(null); 
  const [RegistrosTotal, setRegistrosTotal] = useState(0);
  const [Pagina, setPagina] = useState(1);
  const [Paginas, setPaginas] = useState([]);

  // cargar al "montar" el componente, solo la primera vez (por la dependencia [])
  useEffect(() => {
    async function BuscarCartas() {
      let data = await cartasService.Buscar();
      setItems(data);
    }
    BuscarCartas();
  }, []);

  async function Buscar() {
    setAccionABMC("L");
    // Simular búsqueda de cartas
    setItems([
      {
        IdCarta: 1,
        Nombre: "Carta 1",
        Descripcion: "Descripción de la carta 1",
        Precio: 10.99,
        Categoria: "Categoría 1",
        Activo: true,
      },
      {
        IdCarta: 2,
        Nombre: "Carta 2",
        Descripcion: "Descripción de la carta 2",
        Precio: 15.99,
        Categoria: "Categoría 2",
        Activo: false,
      },
    ]);
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
      IdCarta: 0,
      Nombre: "",
      Descripcion: "",
      Precio: 0,
      Categoria: "",
      Activo: true,
    });
  }

  function Volver() {
    setAccionABMC("L");
    setItem(null);
  }

  return (
    <div>
      <div className="tituloPagina">
        Cartas <small>{TituloAccionABMC[AccionABMC]}</small>
      </div>

      <CartasBuscar
        Nombre={Nombre}
        setNombre={setNombre}
        Categoria={Categoria}
        setCategoria={setCategoria}
        Buscar={Buscar}
        Agregar={Agregar}
      />

      <CartasListado
        Items={Items}
        Consultar={Consultar}
        Modificar={Modificar}
        ActivarDesactivar={() => {}}
        Imprimir={() => {}}
        Pagina={Pagina}
        RegistrosTotal={RegistrosTotal}
        Paginas={Paginas}
        Buscar={Buscar}
      />

      {AccionABMC !== "C" && (
        <CartasRegistro
          AccionABMC={AccionABMC}
          Item={Item}
          Grabar={() => {}}
          Volver={Volver}
        />
      )}
    </div>
  );
}
export { Cartas };
