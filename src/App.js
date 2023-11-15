import logo from './logo.svg';
import './App.css';
import { Listado } from './components/listado';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faHome, faUsers, faEnvelope, faCalendar, faBell, faUser, faUserSecret, faUserNinja, faUserTie, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import Desafios from './components/desafios';


function App() {
  const [logeado, setLogeado] = useState(true);
  const [nuevoEquipo, setNuevoEquipo] = useState({});
  const [equipos, setEquipos] = useState([
    { "titulo": "Siderca FC" },
    { "titulo": "UTN Delta Primero" },
    { "titulo": "Patronato JRS" },
    { "titulo": "La banda FC" },
    { "titulo": "CA Metegol" },
    { "titulo": "Sacachispas" },
    { "titulo": "Tercero Sistemas" },
    { "titulo": "Mitre" },
    { "titulo": "BJR FC" },
    { "titulo": "Quinto Mecanica" },
    { "titulo": "UTN Pacheco" }
  ]);

  const [mostrarDesafios, setMostrarDesafios] = useState(false);

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
            <li><FontAwesomeIcon icon={faUser} /> </li>
            <li><FontAwesomeIcon icon={faHome} /> </li>
            <li><FontAwesomeIcon icon={faUsers} /> </li>
            <li><FontAwesomeIcon icon={faEnvelope} /> </li>
            <li><FontAwesomeIcon icon={faCalendar} /> </li>
            <li><FontAwesomeIcon icon={faBell} /> </li>
            <li  style={{ marginTop: '220px' }}> <FontAwesomeIcon icon={faCog}/> </li>
          </ul>
        </div>

        {/* Contenido principal */}
        <div className="main-content">
          
          <div className="logo-container">
            <img src="/images/futclash.png" alt="FUTCLASH Logo" className="logo" />
          </div>

          <button className="verpartidos-button">VER PARTIDOS</button>
          <button className="verdesafios-button" onClick={() => setMostrarDesafios(true)}>VER DESAFIOS</button>

          {mostrarDesafios && <Desafios equipos={equipos} onClose={() => setMostrarDesafios(false)} />}

          <div className="buscar-rival">
            Buscar rival <input />
          </div>

          <div className="equipos-disponibles">
            <h2>EQUIPOS DISPONIBLES</h2>
            <div className="cartas-equipos">
              {equipos.map((equipo, index) => (
                <div key={index} className="carta-equipo">
                  <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>{equipo.titulo}</div>

                {/* Iconos de jugadores */}
                <div className="jugadores-icons" style={{ marginTop: '2px' }}>
                  <FontAwesomeIcon icon={faUser} style={{ marginRight: '5px' }} />
                  <FontAwesomeIcon icon={faUserSecret} style={{ marginRight: '5px' }}/>
                  <FontAwesomeIcon icon={faUserNinja} style={{ marginRight: '5px' }} />
                  <FontAwesomeIcon icon={faUserTie} style={{ marginRight: '5px' }}/>
                  <FontAwesomeIcon icon={faUserAstronaut} style={{ marginRight: '5px' }}/>
                </div>
                    
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
