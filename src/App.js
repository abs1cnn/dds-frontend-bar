// src/App.js
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Inicio } from "./components/Inicio";
import { Menu } from "./components/Menu";
import {Empleados} from "./components/empleados/Empleados"; // Importa el nuevo componente
import {Cartas} from "./components/cartas/Cartas"; // Importa el nuevo componente
import {Pedidos} from "./components/pedidos/Pedidos"; // Importa el nuevo componente
import {Mesas} from "./components/mesas/Mesas"; // Importa el nuevo componente



function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <div className="divBody">
          <Routes>
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/empleados" element={<Empleados/>} /> {/* Nueva ruta */}
            <Route path="/pedidos" element={<Pedidos />} /> {/* Nueva ruta */}
            <Route path="/carta" element={<Cartas/>} /> {/* Nueva ruta */}
            <Route path="/mesas" element={<Mesas/>} /> {/* Nueva ruta */}
            <Route path="*" element={<Navigate to="/inicio" replace />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
