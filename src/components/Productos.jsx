import React, {useState, useEffect} from 'react'

export default function Productos({item, color, welcomeAlert}) {
    console.log("render producto");

    const [contador, setContador] = useState (0);

  return (
    <div style={{marginColor:"red", margin: "1px", backgroundColor: color }}>
      <h1>Contador: {contador}</h1>
      <button 
      onClick={()=> {
      contador = + 1;
      console.log(contador);}}>
        sumar contador
      </button>
        <h2>{item.name} </h2>
        <div>id: {item.id} </div>
        <div>{item.price}</div>

    </div>
  )
}
