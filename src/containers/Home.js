import React from "react";
import Botones from "../components/Botones";
//import Recetario from "./Recetario";
import "../styles/Home.css";

function Home() {
  return (
    <div className="container">
      <h2>¿Qué comemos hoy? 2.0</h2>
      {/* <div id="home_barra_buscador"
      className="d-flex">
        <div id="imagen_lupa">
          <img
            src="https://e7.pngegg.com/pngimages/506/609/png-clipart-computer-icons-web-search-engine-search-magnifying-glass-angle-zooming-user-interface-thumbnail.png"
            alt="lupa"
            id="buscar_lupa"
          />
        </div>
        <div id="buscador" >
          <input
            type="text"
            id="buscar"
            name="buscador"
            jsaction="paste:puy29d;"
          />
        </div>
      </div> */}
      <div id="inicio_botones" className="d-flex m-3 justify-content-around">
        <Botones url_to="/Recetario" texto="Ver todas las recetas" />
        <Botones url_to="/Receta" texto="Tirame una opción random" />
        <Botones url_to="/Heladera" texto="Ver en mi heladera" />
      </div>
    </div>
  );
}
export default Home;
