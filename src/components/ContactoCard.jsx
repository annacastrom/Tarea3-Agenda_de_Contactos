import React from 'react'
import './ContactoCard.css'

function ContactoCard({nombre, telefono, categoria, onEliminar, color}) {

    const iniciales = nombre.split(' ').map(p => p[0]).join('').toUpperCase();

  return (
    <div className='contactocard-contenedor'>
        <div
        className='tarjeta-avatar'
        style={{
            backgroundColor: color.bg,
            color: color.text
        }}
>       {iniciales}
        </div>

        <div className='contactocard-info'>
            <h4 className='contactocard-nombre'>{nombre}</h4>
            <p className='contactocard-telefono'>{telefono}</p>
        </div>

        <span className={`contactocard-categoria ${categoria.toLowerCase()}`}>
            {categoria}
        </span>

        <button className='contactocard-eliminar' onClick={onEliminar}>
            ×
        </button>
    </div>
  )
}

export default ContactoCard