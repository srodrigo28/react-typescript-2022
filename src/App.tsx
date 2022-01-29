//import { useState } from 'react'
import { Titulo } from './components/Titulo';
import { Texto } from './components/condicionais/Texto'


const App = () => {
  
  return(
    <div className="container mt-5">
        <Titulo />
        
        <Texto />
        
    </div>
  )
}

export default App;