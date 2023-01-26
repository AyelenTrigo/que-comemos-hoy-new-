import React from 'react'
import Botones from '../components/Botones'

function Heladera() {
  return (
    <div className='d-flex-column'>
        <h2>Estos productos tengo en mi heladera</h2>
        <input placeholder='Producto 1' id='producto_1'>
         </input>
         <input placeholder='Producto 2' id='producto_2'>
         </input>
         <Botones 
         url_to="/"
         texto="Volver al Home"/>
    </div>
  )
}

export default Heladera