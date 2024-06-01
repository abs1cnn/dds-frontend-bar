import axios from "axios";
const urlResource = "http://localhost:3000/api/mesas";

async function Buscar() {
  const resp = await axios.get(urlResource);
  return resp.data;
}
export const mesaService = {
  Buscar
};
