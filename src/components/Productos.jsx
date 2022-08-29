import React from 'react'

export default function Productos({item, color, welcomeAlert}) {
    welcomeAlert();
  return (
    <div style={{marginColor:"red", margin: "1px", backgroundColor: color }}>
        <h2>{item.name} </h2>
        <div>id: {item.id} </div>
        <div>{item.price}</div>

    </div>
  )
}
