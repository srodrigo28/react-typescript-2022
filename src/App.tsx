import React from 'react'
import { Form } from './Form';
import { Titulo } from './Titulo';

const App = () => {
  return(
    <div className="container mt-5">
        <Titulo />
        <Form />
        <button className='form-control btn btn-primary mt-3'>Entrar</button>
    </div>
  )
}

export default App;