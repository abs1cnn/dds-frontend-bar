
import axios from "axios";
const urlResource = "http://localhost:3000/api/pedidos";

async function Buscar() {
  const resp = await axios.get(urlResource);
  // Mapear los datos para incluir Nombre y Apellido del empleado
  const pedidosConEmpleado = resp.data.map((pedido) => ({
    ...pedido,
    NombreEmpleado: pedido.articulosEmpleado ? `${pedido.articulosEmpleado.Nombre} ${pedido.articulosEmpleado.Apellido}` : 'N/A'
  }));
  return pedidosConEmpleado;
}

async function BuscarPorId(id) {
  const resp = await axios.get(urlResource + "/" + id);
  const pedido = resp.data;
  // Asegurarse de incluir Nombre y Apellido del empleado
  pedido.NombreEmpleado = pedido.articulosEmpleado ? `${pedido.articulosEmpleado.Nombre} ${pedido.articulosEmpleado.Apellido}` : 'N/A';
  return pedido;
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
