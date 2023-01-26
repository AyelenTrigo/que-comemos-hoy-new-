import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./containers/Home";
import Layout from "./components/Layout";
import MostrarResultados from "./containers/MostrarResultados";
import Recetario from "./containers/Recetario";
import Ayuda from "./containers/Ayuda"
import Heladera from "./containers/Heladera"
import Receta from "./components/Receta"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Layout>
      <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/mostrar_resultados" element={<MostrarResultados />}></Route>
              <Route exact path="/recetario" element={<Recetario />}></Route>
              <Route exact path="/ayuda" element={<Ayuda />}></Route>
              <Route exact path="/receta" element={<Receta />}></Route>
              <Route exact path="/heladera" element={<Heladera />}></Route>
      </Routes>
      </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
