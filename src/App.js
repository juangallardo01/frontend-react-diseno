import logo from './logo.svg';
import './App.css';
import { Listado } from './components/listado';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faHome, faUsers, faEnvelope, faCalendar } from '@fortawesome/free-solid-svg-icons';


function App() {
  const [logeado, setLogeado] = useState(true);
  const [nuevoEquipo, setNuevoEquipo] = useState({});
  const [equipos, setEquipos] = useState([
    { "titulo": "frd delta" },
    { "titulo": "utn buenos aires" },
  ]);

  const desafiarEquipo = (equipo) => {
    // Lógica para manejar el desafío del equipo
    console.log(`Desafiando al equipo: ${equipo.titulo}`);
  };

  if (!logeado) {
    return (
      <div className="no-logeado">
        <h1>No estás logeado, tienes que logearte</h1>
      </div>
    );
  } else {
    return (
      <div className="app-container">
        {/* Barra lateral */}
        <div className="sidebar">
          <ul>
            <li> <FontAwesomeIcon icon={faCog}/> </li>
            <li><FontAwesomeIcon icon={faHome} /> </li>
            <li><FontAwesomeIcon icon={faUsers} /> </li>
            <li><FontAwesomeIcon icon={faEnvelope} /> </li>
            <li><FontAwesomeIcon icon={faCalendar} /> </li>
          </ul>
        </div>

        {/* Contenido principal */}
        <div className="main-content">
          
          <div className="logo-container">
            <img src="/images/futclash.png" alt="FUTCLASH Logo" className="logo" />
          </div>

          <button className="verpartidos-button">VER PARTIDOS</button>
          <button className="verdesafios-button">VER DESAFIOS</button>

          <div className="buscar-rival">
            Buscar rival <input />
          </div>

          <div className="equipos-disponibles">
            <h2>EQUIPOS DISPONIBLES</h2>
            <div className="cartas-equipos">
              {equipos.map((equipo, index) => (
                <div key={index} className="carta-equipo">
                  <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>{equipo.titulo}</div>

                  <button
                    className="desafiar-button"
                    onClick={() => alert("Tu solicitud de desafío ha sido enviada con éxito!")}
                  >
                    MATCH
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="nuevo-equipo">
            Nuevo equipo:{" "}
            <input
              onChange={(text) => {
                setNuevoEquipo({
                  titulo: text.target.value,
                });
              }}
            />
            <button
              className="crear-button"
              onClick={() => {
                let nuevos_equipos = equipos.concat(nuevoEquipo);
                setEquipos(nuevos_equipos);
              }}
            >
              Crear equipo
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
