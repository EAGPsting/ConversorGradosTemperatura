import {useState, useEffect} from 'react';
import './App.css';


function App() {
  const [Celsius, setCelsius] = useState(0);
  const [Fahrenheit, setFahrenheit] = useState(0);
  const [Kelvin, setKelvin] = useState(0);

  const [grado, setGrado] = useState(0);
  const [tipo, setTipo] = useState(0);

  useEffect(() => {
    //La data viene en Celsius
      if (tipo==1)
      {
        setFahrenheit((grado*9/5 )+32);
        setKelvin(((grado*1) + 273.15));
        setCelsius(grado);
      } 
      //La data viene en Fahrenheit
      if (tipo==2)
      {
        setFahrenheit(grado);
        setKelvin(((grado*1-32)*(5/9))+273.15);
        setCelsius((grado*1-32)*(5/9));
      } 
      //La data viene en Kelvin
      if (tipo==3)
      {
        setFahrenheit(((grado*1-273.15)*(9/5))+32);
        setKelvin(grado);
        setCelsius(grado*1-273.15);
      } 

  }, [grado, tipo]);


  const handleTotalChange = e => {
    if (!isNaN(e.target.value)) {
      setGrado(e.target.value);
    }
  };


  return (
    <div className="App">
      <h1>Convertidor de unidades de temperatura</h1>

      <p>Fahrenheit: {Fahrenheit}</p>
      <p>Kelvin: {Kelvin}</p>
      <p>Celsius: {Celsius}</p>
      <hr />

      <h3>{grado}</h3>

      <select onChange={event => setTipo(event.target.value)} value={tipo}>
        <option value={1}>Celsius</option>
        <option value={2}>Fahrenheit</option>
        <option value={3}>Kelvin</option>
      </select>
      <input onChange={handleTotalChange} value={grado} />
    </div>
  );
}

export default App;
