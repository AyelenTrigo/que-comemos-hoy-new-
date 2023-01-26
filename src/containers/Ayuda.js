import React from "react";
import Botones from "../components/Botones";

function Ayuda(){
    return(
        <div>
            <h2>Yo soy la ayuda</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio fugiat sint eveniet pariatur eligendi est cumque iste repellat suscipit impedit accusamus enim ex labore libero modi reiciendis, repudiandae unde voluptatibus?</p>
                <Botones 
                url_to="/"
                texto="Volver al Home"
                />
            </div>
    )
}
export default Ayuda;
