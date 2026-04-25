import { useState } from 'react'
import './App.css'
import ContactoForm from './components/ContactoForm';
import ContactoList from './components/ContactoList';

function App() {

  const [contactos, setcontactos] = useState([]);
  const [filtro, setFiltro] = useState('Todos');

  function onAgregar(nuevoContacto) {
    const nuevaContactoList = contactos.concat(nuevoContacto);
    setcontactos(nuevaContactoList);
  }

  function onEliminar(indexAEliminar) {
    const contactosActualizados = contactos.filter((contacto, index) => index !== indexAEliminar);
    setcontactos(contactosActualizados); 
  }

  const contactosFiltrados = filtro === 'Todos' ? contactos : contactos.filter(contacto => contacto.categoria === filtro);

  return (
    <div className="app-contenedor">
      <ContactoForm
      onAgregar={onAgregar}
      numero={contactos.length}
      />

    <div className="filtro-contenedor">
      <button
        className={filtro === 'Todos' ? 'filtro-boton todos' : 'filtro-boton'}
        onClick={() => setFiltro('Todos')}
      >
        Todos
      </button>

      <button
        className={filtro === 'Trabajo' ? 'filtro-boton trabajo' : 'filtro-boton'}
        onClick={() => setFiltro('Trabajo')}
      >
        Trabajo
      </button>

      <button
        className={filtro === 'Familia' ? 'filtro-boton familia' : 'filtro-boton'}
        onClick={() => setFiltro('Familia')}
      >
        Familia
      </button>

      <button
        className={filtro === 'Amigo' ? 'filtro-boton amigo' : 'filtro-boton'}
        onClick={() => setFiltro('Amigo')}
      >
        Amigo
      </button>
    </div>

      <ContactoList
      contactos={contactosFiltrados}
      onEliminar={onEliminar}
      />

      <div className='app-contactos-mostrados'>
        <p className='app-contactos-mostrados-texto'>mostrando <span className='app-contactos-mostrados-numero'>{contactosFiltrados.length}</span> de <span className='app-contactos-totales-numero'>{contactos.length}</span> contactos</p>
      </div>

    </div>
  );
}

export default App;