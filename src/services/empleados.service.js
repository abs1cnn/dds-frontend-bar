import axios from "axios";
const urlResource = "http://localhost:3000/api/empleados";

async function Buscar() {
  const resp = await axios.get(urlResource);
  return resp.data;
}
export const empleadosService = {
  Buscar
};


async function BuscarPorId(item) {
  const resp = await axios.get(urlResource + "/" + item.IdArticulo);
  return resp.data;
}
async function ActivarDesactivar(item) {
  await axios.delete(urlResource + "/" + item.IdArticulo);
}
async function Grabar(item) {
  if (item.IdArticulo === 0) {
    await axios.post(urlResource, item);
  } else {
    await axios.put(urlResource + "/" + item.IdArticulo, item);
  }
}
export const articulosService = {
  Buscar,BuscarPorId,ActivarDesactivar,Grabar
};
