import React, { useState } from "react";
import './App.css'

import Intervalo from "./components/Numero";
import Media from "./components/Media"
import Soma from "./components/Soma"
import Sorteio from "./components/Sorteio"

function App(){

  return (
    <div className="App">
      <h1>PROJETO AVALIATIVO REACT-REDUX 2º BIMESTRE</h1>
      
      <div className="linha">
        <Intervalo></Intervalo>
      </div>

      <div className="linha">
        <Media></Media>
        <Soma></Soma>
        <Sorteio></Sorteio>
      </div>

    </div>
  )
}

export default App;
