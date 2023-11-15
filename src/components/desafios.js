import React from 'react';
import './desafios.css';

function Desafios({ equipos, onClose }) {
    const desafiosPendientes = [
      { equipo: equipos[0].titulo, tipo: "te ha desafiado" },
      { equipo: equipos[1].titulo, tipo: "has desafiado" },
      { equipo: equipos[2].titulo, tipo: "has desafiado" },
      { equipo: equipos[3].titulo, tipo: "has desafiado" },
    ];
  
    return (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close" onClick={onClose}>&times;</span>
            <h1>Desafíos pendientes</h1>
            <div className="desafios-container">
              {desafiosPendientes.map((desafio, index) => (
                <div key={index} className={`desafio-card ${desafio.tipo === 'te ha desafiado' ? 'te-ha-desafiado' : 'has-desafiado'}`}>
                    {desafio.tipo === "te ha desafiado"
                    ? `El equipo rival "${desafio.equipo}" te ha desafiado`
                    : `Has desafiado a ${desafio.equipo}`}
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
    
    export default Desafios;