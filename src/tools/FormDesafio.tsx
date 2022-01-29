import React, { useState } from 'react'

export const FormDesafio = () => {
    const [name, setName] = useState('Nome');
    const [sobrenome, setSobrenome] = useState('Sobrenome');
    const [idade, setIdade] = useState('Idade');

    const PegaNome = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName( event.target.value);
    }

    const PegaSobre = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSobrenome( event.target.value);
    }

    const PegaIdade = (event: React.ChangeEvent<HTMLInputElement>) => {
      setIdade( event.target.value);
    }
    return(
      <div className="row mb-5 mt-5">
        <div className="col-12">
          Nome:
          <input type="text" className="form-control" value={name} onChange={PegaNome}  />
        </div>
  
        <div className="col mt-3">
          Sobrenome:
          <input type="text" className="form-control" value={sobrenome} onChange={PegaSobre}  />
        </div>
  
        <div className="col mb-4 mt-3">
          Idade:
          <input type="text" className="form-control" value={idade} onChange={PegaIdade}  />
        </div>
  
        <div className="col-12">
          <p className="alert alert-primary">Olá ---, tudo bem? - {name} {sobrenome}</p>
          <p className="alert alert-success">Você tem {idade} anos.</p>
        </div>
      </div>
    )
}