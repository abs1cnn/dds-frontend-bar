import axios from "axios";
const urlResource = "http://localhost:3000/api/empleados";

// funcion buscar, hace un fech con axios
async function Buscar() {
  const resp = await axios.get(urlResource);
  return resp.data;
}

// funcion buscar, hace un fech con axios, agrefa barra inclinada e id
async function BuscarPorId(item) {
  const resp = await axios.get(urlResource + "/" + item.IdEmpleado);
  return resp.data;
}

// elimina link/id
async function ActivarDesactivar(item) {
  await axios.delete(urlResource + "/" + item.IdEmpleado);
}


// si no existe lo crea y si existe lo actualiza
async function Grabar(item) {
  if (item.IdEmpleado === 0) {
    await axios.post(urlResource, item);
  } else {
    await axios.put(urlResource + "/" + item.IdEmpleado, item);
  }
}

// aca llama a las funciones
export const empleadosService = {
  Buscar,
  BuscarPorId,
  ActivarDesactivar,
  Grabar
};
