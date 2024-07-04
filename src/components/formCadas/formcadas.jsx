import React from 'react';
import './formcadas.css';
import { useState } from 'react';

const FormCadastro = () => {
    const [data, setData] = useState({
        marca:null,
        modelo:null,
        cor:null,
        ano:null,
        valor:null,
        image:null,
        negociacao:null,
        vendido:null,
    });

    const cadastrar = async (e) => {
        e.preventDefault()
        const confirmarCadastro = confirm("Confirma o cadastro?");

        if(confirmarCadastro === true && data.marca !== null && data.modelo !== null && data.cor !== null && data.ano !== null  && data.image 
            && data.negociacao !== null && data.vendido !==  null){
                const newObject = data;
            await fetch(`http://localhost:3030/cars`, {
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(newObject)
            })  
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error));

            setData({
                marca:null,
                modelo:null,
                cor:null,
                ano:null,
                valor:null,
                image:null,
                negociacao:null,
                vendido:null,
            });
        }
        return;
    }
    return(
        <form>
        <label htmlFor="marca">Marca</label>
        <input type="text" id='marca' value={data.marca} onChange={(e) => {setData({...data, marca:e.target.value})}}/>
        <p style={data.marca === null ? {display:"block", color:"red"} : {display:"none"}}>Preencha este campo!*</p>
        <label htmlFor="modelo">Modelo</label>
        <input type="text" id='modelo' value={data.modelo} onChange={(e) => {setData({...data, modelo:e.target.value})}}/>
        <p style={data.modelo === null ? {display:"block", color:"red"} : {display:"none"}}>Preencha este campo!*</p>
        <label htmlFor="cor">Cor</label>
        <input type="text" id='cor' value={data.cor} onChange={(e) => {setData({...data, cor:e.target.value})}}/>
        <p style={data.cor === null ? {display:"block", color:"red"}: {display:"none"}}>Preencha este campo!*</p>
        <label htmlFor="ano" >Ano</label>
        <input type="number" id="ano" value={data.ano} onChange={(e) => {setData({...data, ano:e.target.value})}}/>
        <p style={data.ano === null ? {display:"block", color:"red"} : {display:"none"}}>Preencha este campo!*</p>
        <label htmlFor="preco" >Preço</label>
        <input type="text" id="preco" value={data.valor} onChange={(e) => {setData({...data, valor:e.target.value})}}/>
        <p style={data.valor === null ? {display:"block", color:"red"} : {display:"none"}}>Preencha este campo!*</p>
        <label htmlFor="link_image">Link da imagem</label>
        <input type="text" id="image" value={data.image} onChange={(e) => {setData({...data, image:e.target.value})}}/>
        <p style={data.image === null ? {display:"block", color:"red"} : {display:"none"}}>Preencha este campo!*</p>
        <label htmlFor="negociacao">Negociação</label>
        <select id="car_negociacao" value={data.negociacao} onChange={(e) => {setData({...data, negociacao:e.target.value})}}>
            <option value="Selecione">Selecione</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
        </select>
        <p style={data.negociacao === null ? {display:"block", color:"red"} : {display:"none"}}>Preencha este campo!*</p>
        <label htmlFor='vendido'>Vendido</label>
        <select id='car_vendido' value={data.vendido} onChange={(e) => {setData({...data, vendido:e.target.value})}}> 
             <option value="Selecione">Selecione</option>
             <option value="Sim">Sim</option>
             <option value="Não">Não</option>
        </select>
        <p style={data.vendido === null ? {display:"block", color:"red"} : {display:"none"}}>Preencha este campo!*</p>
        <button id="cadastrar" onClick={cadastrar}>Cadastrar</button>
        </form>
    )
}
export default FormCadastro;