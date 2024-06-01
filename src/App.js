// src/App.js
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Inicio } from "./components/Inicio";
import { Articulos } from "./components/articulos/Articulos";
import { ArticulosFamilias } from "./components/ArticulosFamilias";
import { Menu } from "./components/Menu";
import EmpleadosTable from "./components/EmpleadosTable"; // Importa el nuevo componente
import PedidosTable from "./components/PedidosTable"; // Importa el nuevo componente



function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <div className="divBody">
          <Routes>
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/articulosfamilias" element={<ArticulosFamilias />} />
            <Route path="/articulos" element={<Articulos />} />
            <Route path="/empleados" element={<EmpleadosTable />} /> {/* Nueva ruta */}
            <Route path="/pedidos" element={<PedidosTable />} /> {/* Nueva ruta */}
            <Route path="*" element={<Navigate to="/inicio" replace />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
