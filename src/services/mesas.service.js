import axios from "axios";
const urlResource = "http://localhost:3000/api/mesas";


async function Buscar() {
  const resp = await axios.get(urlResource);
  return resp.data;
}

async function BuscarPorId(item) {
  const resp = await axios.get(urlResource + "/" + item.IdMesa);
  return resp.data;
}

async function ActivarDesactivar(item) {
  await axios.delete(urlResource + "/" + item.IdMesa);
}

async function Grabar(item) {
  if (item.IdMesa === 0) {
    await axios.post(urlResource, item);
  } else {
    await axios.put(urlResource + "/" + item.IdMesa, item);
  }
}

export const mesasService = {
  Buscar,
  BuscarPorId,
  ActivarDesactivar,
  Grabar
};