import React, { useState } from 'react';
import './App.css';
import TrackCep from './TrackCep';

function App() {
  const [events, setEvents] = useState([]);

  const convertArray =(obj) => {
    const arr = [obj];
    return arr;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    fetch(`http://localhost:3010/?tracking=${data.tracking}`)
    .then(response => response.json())
    .then(data => {
      const array = convertArray(data);
      setEvents(array);
      console.log(array);
    })
    .catch(error => console.error);
  }

  return (
    <div className="container mt-5">
      <h1>Buscar CEP</h1>  
        <form onSubmit={submitHandler}>
          <div className="row">
            <div className="col-2">
              <div className="form-group">
                <input type="text" name="tracking" className="form-control"/>
              </div>
            </div>
            <div className="col-1">
              <button type="submit" name="tracking" className="btn btn-secondary">Buscar</button>  
            </div>
          </div>  
        </form>
        
        
        <TrackCep events={events} />
    </div>
  );
}

export default App;
