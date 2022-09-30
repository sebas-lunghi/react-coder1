import React from 'react'

export default function navBar() {

    let estiloNav = {color: "red"}
   
  return (
    <div >
        <ul style={estiloNav}>
            <li>
                Inicio
            </li>
            <li>
                Models
            </li>
            <li>
                Contacto
            </li>
        </ul>
    </div>
  )
}
