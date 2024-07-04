import React from "react";
// importando o Banner 
import Banner from "../components/banner/banner";
// importando o component de carros
import Carros from "../components/carros/carros";
const Home = () =>{
    return(
       <div>
        <Banner/>
        <Carros/>
       </div>
    );
}
export default Home;