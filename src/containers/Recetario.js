import React from 'react'
import Botones from '../components/Botones'

const Recetario = () => {
  return (
    <div className='d-flex-column'>
      <h2>Este es el Recetario</h2>
        <Botones 
        url_to="/"
        texto="Volver al Home"
        />
    </div>
  )
}

export default Recetario