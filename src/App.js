import React, { useState } from "react";
import './App.css'

import Numero from "./components/Numero";
import Recesso from "./components/Recesso"
import Propiedades from "./components/Propiedades"
import Sorteio from "./components/Sorteio"
import Desafio from "./components/Desafio"

function App() {

  return (
    <div className="App">
      <h1>PROJETO AVALIATIVO REACT-REDUX 2º BIMESTRE</h1>
        <div>
          <Desafio></Desafio>
        </div>
          <div className="linha">
        <Numero></Numero>
        </div>
        <div className="linha">
          <Propiedades titulo = "QUAL SUA NOTA?" nome = "Marcelo Luiz Siqueira Reis sua nota é: ">
            
          </Propiedades>
        </div> 
        <div className="linha">
          <Sorteio></Sorteio>
        </div>
        <div className="linha">
          <Recesso></Recesso>
        </div>
   </div>
  )
}

export default App;
