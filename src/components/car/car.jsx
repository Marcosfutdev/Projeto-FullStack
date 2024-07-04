import React, { useState } from 'react';
import { Buffer } from 'buffer';
import "./car.css"
const Car = ({item}) => {

    const [visibleForm, setVisibleForm] = useState(false);

    const [data, setData] = useState({
        marca:item.marca,
        modelo:item.modelo,
        cor:item.cor,
        ano: item.ano,
        valor:item.valor,
        image:item.image,
        negociacao:item.negociacao,
        vendido:item.vendido,
    });

    const mostrarForm =  () => {
       setVisibleForm(!visibleForm);
    }

    const deletar = () => {
       const confirmarDelecao = confirm("Deseja mesmo deletar?");
       if(confirmarDelecao){
          fetch(`http://localhost:3030/cars/${item._id}`, {
            method:"DELETE",
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error))
    }
    return;
     }

     const alterar = async (e) => {
        e.preventDefault();
        const confirmarAlteração = confirm("Deseja mesmo alterar?");
        if(confirmarAlteração === true && data.marca !== null && data.modelo !== null && 
            data.cor !== null && data.ano !== null && data.valor !== null && 
            data.image !== null && data.negociacao !== null && data.vendido !== null){
            const newObject = data;
            await fetch(`http://localhost:3030/cars/${item._id}`,{
                method:"PATCH",
                body: JSON.stringify(newObject),
                headers:{
                    'Content-Type':'application/json; charset=UTF-8'
                }
            })
            .then((response) => response.json())
            .then((data) => console.log(data))   
            .catch((error) => console.log(error))
        }
        return;
     }
    return(
        <div key={item._id} className='car'>
        <div id="content_car">
         <h3>Marca: {item.marca}</h3>
         <h4>Modelo: {item.modelo}</h4>
         <p className='cor'>Cor: {item.cor}</p>
         <p className='ano'>Ano: {item.ano}</p>
         <p className='preco'>Preço: {item.valor} R$</p>
         <p className='negociacao'>Em negociação: {item.negociacao}</p>
         <p className='vendido'>Vendido: {item.vendido}</p>
       </div>
        <form style={visibleForm ? {display:"block", marginLeft:"5px", marginRight:"5px"} : {display:"none"}}>
        <label htmlFor="marca">Marca</label>
        <input type="text" id='marca' value={data.marca} onChange={(e) => {setData({...data, marca:e.target.value })}}/>
        <label htmlFor="modelo">Modelo</label>
        <input type="text" id='modelo'  value={data.modelo} onChange={(e) => {setData({...data, modelo:e.target.value})}}/>
        <label htmlFor="cor">Cor</label>
        <input type="text" id='cor' value={data.cor} onChange={(e) => {setData({...data, cor:e.target.value})}}/>
        <label htmlFor="ano" >Ano</label>
        <input type="number" id="ano" value={data.ano} onChange={(e) => {setData({...data, ano:e.target.value})}}/>
        <label htmlFor="preco" >Preço</label>
        <input type="text" id="preco" value={data.valor} onChange={(e) => {setData({...data, valor:e.target.value })}}/>
        <label htmlFor="link_image">Link da imagem</label>
        <input type="text" id="image" value={data.image} onChange={(e) => {setData({...data, image:e.target.value})}}/>
        <label htmlFor="negociacao">Negociação </label>
        <select id="car_negociacao" style={{marginBottom:"5px", marginTop:"5px", marginRight:"10px"}} required="required"
        value={item.negociacao} onChange={(e) => {setData({...data, negociacao:e.target.value})}}>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
        </select>
        <label htmlFor='vendido'>Vendido </label>
        <select id='car_vendido'  style={{marginBottom:"5px", marginTop:"5px"}} required="required" 
        value={item.vendido} onChange={(e) => {setData({...data, vendido:e.target.value})}}>
             <option value="Sim">Sim</option>
             <option value="Não">Não</option>
        </select>
        <button style={{color:"white", backgroundColor:"rgb(3, 182, 3",
         border:"1px solid black", borderRadius:"5px", padding:"10px", width:"400px"}}
         onClick={alterar}
         >Alterar</button>
        </form>
        <img src={item.image} alt="imagem_carro" className="image_car" style={visibleForm ? {position:"static"} : {}}/>
        <div className='buttons' style={visibleForm ? {marginTop:"300px", marginLeft:"-150px"}: {}}>
            <button id='alterar' onClick={mostrarForm}>Alterar registro</button>
            <button id='deletar' onClick={deletar}>Deletar registro</button>
        </div>
        </div>
    );
}
export default Car;