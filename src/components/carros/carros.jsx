 import React, {useState} from 'react';
import { useEffect } from 'react';
import "./carros.css";
import axios from 'axios'
import Car from '../../components/car/car';
const Carros = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
    fetch("http://localhost:3030/cars")
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => console.log("Erro ao se conectar com a api", error))
    }, [data])
    
    return(
        <div id='carros'>
          <div id="des_cars">
            <h1>Esses são os carros cadastrados no sistema:</h1>
           <p>Você pode modificar o registro ou deletá-lo! </p>
          </div>
          <div id="carros_cadastrados">
            {
             data.length > 0?
             data.map((item) => (
              <Car item={item}/>
             )) :
             <p>Sem registros...</p>
            }
          </div>
        </div>
    );
}
export default Carros;