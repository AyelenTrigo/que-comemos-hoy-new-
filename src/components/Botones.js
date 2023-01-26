import React from 'react'
import { Link } from "react-router-dom";

const Botones = (props) => {
  return (
    <div className="d-flex justify-content-around m-2">
        <Link to={props.url_to}
        id={props.styled_button}
        className="btn btn-primary btn-sm btn-block">
          {props.texto}
        </Link>
    </div>
  )
}

export default Botones