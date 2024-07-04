import React from 'react';
import FormCadastro from '../components/formCadas/formcadas';

const Cadastrar = () => {
    return(
        <div>
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"20px", gap:"5px"}}>
        <h1>Cadastre um carro no sistema</h1>
        <p>Preencha o formulário da forma como é pedido nos campos!</p>
        <p>Depois envie!</p>
        </div>
         <div style={{display:"flex", width:"100vw", justifyContent:"center", marginTop:"20px"}}>
            <FormCadastro/> 
         </div>
        </div>
    )
}
export default Cadastrar;