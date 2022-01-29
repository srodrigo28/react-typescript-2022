import React, { useState } from 'react'

export const FormEvent = () =>{
    const [name, setName] = useState('Nome');

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName( event.target.value);
    }
    return(
        <div>
            Nome:
            <input className='form-control' type="text" value={name} onChange={handleInput} />
            <hr />
            Seu nome é: {name}
        </div>
    )
}