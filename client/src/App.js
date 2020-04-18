import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';
import useDarkMode from './hooks/useDarkMode'

function App() {
  const [value, setValue] = useState([])
  useEffect(() => {
  Axios
  .get("http://localhost:5000/api/players")
  .then(res =>{
    setValue(res.data)
  })
  .catch(err =>{
    console.log(err)
  })
  },[])

  const [darkModeValue, setDarkModeValue] = useDarkMode(false)
  const buttonClick = () =>{
    setDarkModeValue(!darkModeValue)
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={buttonClick}>Dark Mode</button>
        {value.map(person => {
          return(
            <div>
             <p>{person.name}</p>
             <p>{person.country}</p>
            </div>
          )
        })}
      </header>
    </div>
  );
}

export default App;
