import axios from "axios";
const urlResource = "http://localhost:3000/api/cartas";

// Función para buscar todas las cartas
async function Buscar() {
  const resp = await axios.get(urlResource);
  return resp.data;
}

// Función para buscar una carta por su IdCarta
async function BuscarPorId(item) {
  const resp = await axios.get(urlResource + "/" + item.IdCarta);
  return resp.data;
}

// Función para eliminar una carta por su IdCarta
async function ActivarDesactivar(item) {
  await axios.delete(urlResource + "/" + item.IdCarta);
}

// Función para agregar o actualizar una carta
async function Grabar(item) {
  if (item.IdCarta === 0) {
    await axios.post(urlResource, item);
  } else {
    await axios.put(urlResource + "/" + item.IdCarta, item);
  }
}

// Exportar las funciones de servicio de cartas
export const cartasService = {
  Buscar,
  BuscarPorId,
  ActivarDesactivar,
  Grabar
};
