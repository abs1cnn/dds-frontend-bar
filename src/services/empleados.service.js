import axios from "axios";
const urlResource = "http://localhost:3000/api/empleados";

async function Buscar() {
  const resp = await axios.get(urlResource);
  return resp.data;
}

async function BuscarPorId(item) {
  const resp = await axios.get(urlResource + "/" + item.IdEmpleado);
  return resp.data;
}

async function ActivarDesactivar(item) {
  await axios.delete(urlResource + "/" + item.IdEmpleado);
}

async function Grabar(item) {
  if (item.IdEmpleado === 100) {
    await axios.post(urlResource, item);
  } else {
    await axios.put(urlResource + "/" + item.IdEmpleado, item);
  }
}

export const empleadosService = {
  Buscar,
  BuscarPorId,
  ActivarDesactivar,
  Grabar
};
