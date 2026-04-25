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

  const contactosFiltroados = filtro === 'Todos' ? contactos : contactos.filter(contacto => contacto.categoria === filtro);

  return (
    <div>
      <ContactoForm
      onAgregar={onAgregar}
      numero={contactos.length}
      />

      <ContactoList
      contactos={contactos}
      onEliminar={onEliminar}
      />

    </div>
  );
}

export default App;