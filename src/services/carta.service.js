import axios from "axios";
const urlResource = "http://localhost:3000/api/cartas";

async function buscar() {
  const resp = await axios.get(urlResource);
  return resp.data;
}
export const cartaService = {
  buscar
};
