<<<<<<< HEAD
import React, { useState, useEffect, useCallback } from "react";
import { cartasService } from "../../services/cartas.service";
=======
// COMPONENTE PADRE

// IMPORTO LIBRERIAS, SERVICES Y COMPONENETES QUE USO
import React, { useState, useEffect, useCallback } from "react";
import moment from "moment";

import { cartasService } from "../../services/cartas.service";

>>>>>>> 266fa9e3d173abf763b87e30c1fbb179dd2d0588
import CartasBuscar from "./CartasBuscar";
import CartasListado from "./CartasListado";
import CartasRegistro from "./CartasRegistro";

function Cartas() {
<<<<<<< HEAD
=======

  // ----------------------
  // ACA GESIONA LOS ESTADOS Y ACCIONES PARA EL ABMC

  // DEFINIR LAS CONSTANTES
>>>>>>> 266fa9e3d173abf763b87e30c1fbb179dd2d0588
  const TituloAccionABMC = {
    A: "(Agregar)",
    B: "(Eliminar)",
    M: "(Modificar)",
    C: "(Consultar)",
    L: "(Listado)",
  };

<<<<<<< HEAD
  const [AccionABMC, setAccionABMC] = useState("L");
  const [Nombre, setNombre] = useState("");
  const [Categoria, setCategoria] = useState("");
  const [Items, setItems] = useState(null);
  const [Item, setItem] = useState(null);

  // Buscar con filtros (Nombre y Categoria)
  const Buscar = useCallback(async () => {
=======
  //  DEFINIR LOS ESTADOS. ABMC TIENE LISTADO COMO ESTADO POR
  const [AccionABMC, setAccionABMC] = useState("L");

  const [Nombre, setNombre] = useState("");
  const [Categoria, setCategoria] = useState("");

  const [Items, setItems] = useState(null);
  const [Item, setItem] = useState(null); 

  const [RegistrosTotal, setRegistrosTotal] = useState(0);
  const [Pagina, setPagina] = useState(1);
  const [Paginas, setPaginas] = useState([]);
  // ----------------------------------------

  // ES EL HOOK "USE EFFECT", ES PARA REALIZAR UNA OPERACION ASINCRONICA 
  // (UNA LLAMADA A UN SERVICIO) CUANDO EL COMPONENTE SE MONTA POR PRIMERA VEZ
  // OBTIENE LOS DATOS DEL SERVIDOR
  useEffect(() => {
    async function BuscarCartas() {
      let data = await cartasService.Buscar();
      setItems(data);
    }
    BuscarCartas();
  }, []);

  // ESTE ES UNA BUSQUEDA CONDICIONAL. ES PARA LOS FILTROS
  // FILTRO POR NOMBRE Y CATEGORIA
  async function Buscar() {
    // ESTADO "LISTAR"
>>>>>>> 266fa9e3d173abf763b87e30c1fbb179dd2d0588
    setAccionABMC("L");
    let data = await cartasService.Buscar();

    if (Nombre) {
<<<<<<< HEAD
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

=======
      data = data.filter(carta => carta.Nombre.toLowerCase().includes(Nombre.toLowerCase()));
    }
    if (Categoria) {
      data = data.filter(carta => carta.Categoria.toLowerCase().includes(Categoria.toLowerCase()));
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

  // AGREGAR NUEVOS ITEMS
>>>>>>> 266fa9e3d173abf763b87e30c1fbb179dd2d0588
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
<<<<<<< HEAD
    alert("Preparando el Alta...");
  }, []);

=======
    alert("preparando el Alta...");
  }, []);
>>>>>>> 266fa9e3d173abf763b87e30c1fbb179dd2d0588
  const Imprimir = useCallback(() => {
    alert("En desarrollo...");
  }, []);

<<<<<<< HEAD
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

=======
  // FUNCION QUE LLAMA A LA FUNC DEL SERVICE. GRABA UNO NUEVO O LO ACTUALIZA
  const Grabar = useCallback(async (item) => {
    await cartasService.Grabar(item);
    alert("Registro " + (AccionABMC === "A" ? "agregado" : "modificado") + " correctamente.");
    Volver();
    Buscar();  // Para actualizar la lista después de guardar
  }, [AccionABMC]);

  // VUELVE A CARGAR LA PAG
>>>>>>> 266fa9e3d173abf763b87e30c1fbb179dd2d0588
  const Volver = useCallback(() => {
    setAccionABMC("L");
  }, []);

<<<<<<< HEAD
=======

  // LO QUE DEVUELVE ESTE COMPONENETE -> ESTRUCTURA HTML
>>>>>>> 266fa9e3d173abf763b87e30c1fbb179dd2d0588
  return (
    <div>
      <div className="tituloPagina">
        Cartas <small>{TituloAccionABMC[AccionABMC]}</small>
      </div>

<<<<<<< HEAD
=======
      {/* COMPONENETE + ATRIBUTOS QUE LE INGRESARAN */}
>>>>>>> 266fa9e3d173abf763b87e30c1fbb179dd2d0588
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
<<<<<<< HEAD
        Buscar={Buscar}
      />

      {Items && Items.length === 0 && (
=======
        Pagina={Pagina}
        RegistrosTotal={RegistrosTotal}
        Paginas={Paginas}
        Buscar={Buscar}
      />

      {Items.length === 0 && (
>>>>>>> 266fa9e3d173abf763b87e30c1fbb179dd2d0588
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
<<<<<<< HEAD

=======
>>>>>>> 266fa9e3d173abf763b87e30c1fbb179dd2d0588
export { Cartas };
