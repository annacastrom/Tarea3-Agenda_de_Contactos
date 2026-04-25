import React from 'react'
import { useState } from 'react'
import './ContactoForm.css'

function ContactoForm({onAgregar, numero}) { // Solo recibe número para añadirlo en el subtítulo de contactos guardados
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [categoria, setCategoria] = useState('');

    function onAgregarContacto() {
        if (nombre.trim() === '' || telefono.trim() === '' || categoria === '') {
            return;
        }

        const nuevoContacto = {
            nombre: nombre,
            telefono: telefono,
            categoria: categoria
        }

        onAgregar(nuevoContacto);

        setNombre('');
        setTelefono('');
        setCategoria('');

    }
    
  return (
    <div className='contactoform-contenedor'>
        <div className='contactoform-encabezado'>
            <h2 className='contactoform-titulo'>Mi agenda</h2>
            <h3 className='contactoform-contactos-guardados'><span className='contactoform-contactos-numero'>{numero}</span> contactos guardados</h3>
        </div>

        <div className='contactoform-formulario'>
        <input 
            className='contactoform-nombre'
            type="text"
            value={nombre}
            placeholder="Nombre completo"
            onChange={(e) => setNombre(e.target.value)}>
        </input>

        <input 
            className='contactoform-telefono'
            type="text"
            value={telefono}
            placeholder="Teléfono"
            onChange={(e) => setTelefono(e.target.value)}>
        </input>

        <select className='contactoform-categoria' value={categoria} onChange={(e) => setCategoria(e.target.value)}>
            <option value="" disabled>Categoría</option>
            <option value="Trabajo">Trabajo</option>
            <option value="Familia">Familia</option>
            <option value="Amigo">Amigo</option>
        </select>

        <button 
            className='contactoform-agregar-contacto' 
            onClick={onAgregarContacto}>
            + Agregar contacto
        </button>
        </div>
    </div>
  )
}

export default ContactoForm