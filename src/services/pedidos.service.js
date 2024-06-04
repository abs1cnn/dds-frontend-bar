import axios from "axios";

const urlResource = "http://localhost:3000/api/pedidos";

async function Buscar() {
  const resp = await axios.get(urlResource);
  return resp.data;
}

async function BuscarPorId(item) {
  const resp = await axios.get(urlResource + "/" + item.IdPedido);
  return resp.data;
}

async function Grabar(item) {
  if (item.IdPedido === 0) {
    await axios.post(urlResource, item);
  } else {
    await axios.put(urlResource + "/" + item.IdPedido, item);
  }
}

export const pedidosService = {
  Buscar,
  BuscarPorId,
  Grabar,
};
