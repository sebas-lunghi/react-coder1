import React from 'react'

export default function ListaDeProductosContainer() {
    const productos = [
        {id:1, name: "modelo1", price: 3000},
        {id:2, name: "modelo2", price: 3500},
        {id:3, name: "modelo3", price: 2000},
        {id:4, name: "modelo4", price: 5000}]

  return <ListaDeProductosLayout productos = {productos}/>
  
}
