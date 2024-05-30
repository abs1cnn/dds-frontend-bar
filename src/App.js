import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Inicio } from "./components/Inicio";
import { Articulos } from "./components/articulos/Articulos";
import { ArticulosFamilias } from "./components/ArticulosFamilias";
import {Menu} from "./components/Menu";
function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <div className="divBody">
            <Routes>
              <Route path="/inicio" element={<Inicio />} />
              <Route path="/articulosfamilias" element={<ArticulosFamilias />} />
              <Route path="*" element={<Navigate to="/Inicio" replace />} />
              <Route path="/articulos" element={<Articulos/>} />
            </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
