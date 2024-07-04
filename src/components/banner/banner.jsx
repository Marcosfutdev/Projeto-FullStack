import React from 'react';
import Logo_Banner from '../assets/carro_banner.jpg';
// style
import "./banner.css"
const Banner = () => {
    return(
        <div id="bem">
          <div id="content">
          <h1>Seja bem vindo ao nosso cadastro de carros!</h1>
            <p>Nosso aplicação é apenas uma forma de sua empresa gerenciar o controle de carros para venda!</p>
            <img src={Logo_Banner} alt="carro" />
          </div>
         </div>
    );
}
export default Banner;