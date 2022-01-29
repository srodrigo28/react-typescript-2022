//import { useState } from 'react'
import { Botao } from './components/basicos/Botao';
import { FormEvent } from './components/FormEvent';
import { Titulo } from './components/Titulo';
import { FormDesafio } from './tools/FormDesafio';

const App = () => {
  
  return(
    <div className="container mt-5">
        <Titulo />
        <Botao  text="Cadastrar" cor="primary"/>
    </div>
  )
}

export default App;