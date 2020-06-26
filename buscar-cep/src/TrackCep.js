import React from 'react'
import './styles/style.css';

function TrackCep({events}){
  if(!events || events.length === 0) return null;
  return(
    <>
      <div className="row">
        <div className="col-6">
          <div className="mt-5">
            <h1>Resultado da Busca:</h1>
            <ul className="list-group">
              {events.map( item => 
                <li className="list-group-item" key={item.cep}>
                  <span>CEP: {item.cep}</span>
                  <span>RUA: {item.logradouro}</span>
                  <span>BAIRRO: {item.localidade}</span>
                  <span>CIDADE: {item.bairro}</span>
                  <span>ESTADO: {item.uf}</span>
                </li>)}
            </ul>
          </div>
        </div>
      </div>
      
    </>
  )}

export default TrackCep;
