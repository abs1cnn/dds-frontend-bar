import React, { useState, useEffect, useCallback } from "react";
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

  // Buscar con filtros (Nombre y Categoria)
  const Buscar = useCallback(async () => {
    setAccionABMC("L");
    let data = await cartasService.Buscar();

    if (Nombre) {
      data = data.filter((carta) =>
        carta.Nombre.toLowerCase().includes(Nombre.toLowerCase())
      );
    }
    if (Categoria) {
      data = data.filter((carta) =>
        carta.Categoria.toLowerCase().includes(Categoria.toLowerCase())
      );
    }
    setItems(data);
  }, [Nombre, Categoria]);

  useEffect(() => {
    Buscar(); // Llama a la función Buscar al montar el componente
  }, [Buscar]);

  const Consultar = (item) => {
    setAccionABMC("C");
    setItem(item);
  };

  const Modificar = (item) => {
    setAccionABMC("M");
    setItem(item);
  };

  const Agregar = useCallback(() => {
    setAccionABMC("A");
    setItem({
      IdCarta: 0,
      Nombre: "",
      Descripcion: "",
      Precio: 0,
      Categoria: "",
      Activo: true,
    });
    alert("Preparando el Alta...");
  }, []);

  const Imprimir = useCallback(() => {
    alert("En desarrollo...");
  }, []);

  const Grabar = useCallback(
    async (item) => {
      try {
        await cartasService.Grabar(item);
        alert(
          "Registro " +
            (AccionABMC === "A" ? "agregado" : "modificado") +
            " correctamente."
        );
        Volver();
        Buscar(); // Actualiza la lista después de guardar
      } catch (error) {
        console.error("Error al grabar carta:", error);
        alert("Hubo un error al intentar guardar el registro.");
      }
    },
    [AccionABMC, Buscar]
  );

  const Volver = useCallback(() => {
    setAccionABMC("L");
  }, []);

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
        Imprimir={Imprimir}
        Buscar={Buscar}
      />

      {Items && Items.length === 0 && (
        <div className="alert alert-info mensajesAlert">
          <i className="fa fa-exclamation-sign"></i> No se encontraron registros...
        </div>
      )}
      {AccionABMC !== "L" && (
        <CartasRegistro
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
export { Cartas };
