import React from 'react'
import ContactoCard from './ContactoCard'
import './ContactoList.css'

function ContactoList({contactos, onEliminar}) {
  return (
    <div>
        {contactos.map((contacto, index) => (
        <ContactoCard
            key={index}
            nombre={contacto.nombre}
            telefono={contacto.telefono}
            categoria={contacto.categoria}
            onEliminar={() => onEliminar(index)}
            />
        ))}
    </div>
  )
}

export default ContactoList