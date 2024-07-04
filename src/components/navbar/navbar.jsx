import React from "react";
import {Link} from 'react-router-dom';
import './navbar.css';
import Logo from '../assets/logo_car.jpg'
const Navbar = () =>{
    return(
        <nav>
            <div className="img">
                <img src={Logo} alt="logo" id="logo" />
            </div>
          <div id="links">
          <Link to={"/"} className="link">Inicio</Link>
          <Link to={"/cadastrar"} className="link">Cadastrar</Link>
          </div>
        </nav>
    )
}
export default Navbar;