import React from 'react'
import ContactoCard from './ContactoCard'
import './ContactoList.css'

function ContactoList({contactos, onEliminar}) {

    const colores = [
    { bg: '#eeeefe', text: '#332e91' },
    { bg: '#e3f4ee', text: '#145a4b' },
    { bg: '#f3e9e4', text: '#5a2c14' },
    { bg: '#f4ecd8', text: '#5a3e14' }
    ];

  return (
    <div className='contactolist-contenedor'>
        {contactos.map((contacto, index) => (
        <ContactoCard
            key={index}
            nombre={contacto.nombre}
            telefono={contacto.telefono}
            categoria={contacto.categoria}
            color ={colores[index % colores.length]}
            onEliminar={() => onEliminar(index)}
            />
        ))}
    </div>
  )
}

export default ContactoList