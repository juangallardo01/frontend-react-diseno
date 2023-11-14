import logo from './logo.svg';
import './App.css';
import { Listado } from './components/listado';
import { useState } from 'react';

function App() {
  const [logeado, setLogeado] = useState(true)
  const [nuevoEquipo, setNuevoEquipo] = useState({})
  const [equipos, setEquipos] = useState([{
    "titulo":"frd delta"
  },
  {
    "titulo":"utn buenos aires"
  },
])
 if (!logeado) {
  return (
    <div>
      <h1>
        No estas logeado, tenes que logearte
      </h1>
    </div>
  )
 } else {
    return (
      <div className="App">

        <Listado titulo="Equipos" data={equipos} texto_a_mostrar="Has desafiado al equipo"/>

        Nuevo equipo: <input 
        onChange={text => {
          setNuevoEquipo({
            "titulo": text.target.value
          })
        }}
        />
        <button onClick={() => {
          let nuevos_equipos = equipos.concat(nuevoEquipo)
          setEquipos(nuevos_equipos)
        }}>Crear equipo</button>

      </div>
    );
 }

}

export default App;
