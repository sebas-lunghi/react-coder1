import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { dividerClasses } from "@mui/material";
import Bienvenida from "./components/Bienvenida";
import Productos from "./components/Productos";
import ListaDeProductosContainer from "./components/ListaDeProductosContainer";
import ListaDeProductosLayout from "./components/ListaDeProductosLayout";

function App() {

function welcomeAlert (){
  alert ("Elije tu producto")
}

let producto1 = {id:1, name: "modelo1", price: 3000}
let producto2 = {id:2, name: "modelo2", price: 3500}
let producto3 = {id:3, name: "modelo3", price: 2000}
let producto4 = {id:4, name: "modelo4", price: 5000}

  return (
    <div>
      <NavBar />

      <Bienvenida />

      <Productos item={producto1} color= {"blue"} welcomeAlert= {welcomeAlert } />
      <Productos item={producto2} color= {"white"}/>
      <Productos item={producto3} color= {"yellow"}/>
      <Productos item={producto4} color= {"brown"}/>


      <Footer />
    </div>
  );
}

export default App;
