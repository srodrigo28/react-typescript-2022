import { useState } from 'react'

export const Contador = () => {
  const[numero, setNumero] = useState(0);

  const adicionar = () => {
    setNumero( numero + 1)
  }

  const remover = () =>{
    if(numero <= 0){
      return
    }else{
      setNumero( numero - 1 )
    }
  }

  return(
    <div className="container mt-5">
       <div className='w-25'>
         <h1>Contador</h1>
         <button onClick={adicionar} className='btn btn-primary'>+</button>
         <h1>{numero}</h1>
         <button onClick={remover} className='btn btn-danger'>-</button>
       </div>
    </div>
  )
}