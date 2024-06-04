import React from "react";

export default function MesasRegistro({ Sector, setSector, Capacidad, setCapacidad, Tipo, setTipo, Ocupada, setOcupada, Grabar }) {
  return (
    <form>
      <label htmlFor="Sector">Sector:</label>
      <input type="text" value={Sector} onChange={(e) => setSector(e.target.value)} />
      <label htmlFor="Capacidad">Capacidad:</label>
      <input type="number" value={Capacidad} onChange={(e) => setCapacidad(e.target.value)} />
      <label htmlFor="Tipo">Tipo:</label>
      <input type="text" value={Tipo} onChange={(e) => setTipo(e.target.value)} />
      <label htmlFor="Ocupada">Ocupada:</label>
      <select value={Ocupada} onChange={(e) => setOcupada(e.target.value)}>
        <option value={true}>Sí</option>
        <option value={false}>No</option>
      </select>
      <button type="button" onClick={() => Grabar()}>Grabar</button>
    </form>
  );
}
