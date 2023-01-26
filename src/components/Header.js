import React from "react";
// import Botones from "./Botones";
import { Link } from "react-router-dom";

function Header(){
    return(
        <div 
        className="d-flex justify-content-between p-2 bg-primary text-white" >Soy el header
            <Link to="/ayuda" 
            className="btn btn-secondary btn-sm">Ayuda</Link>
        </div>
    )
}
export default Header;
