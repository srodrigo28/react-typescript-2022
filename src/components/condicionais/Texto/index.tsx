import { useState } from "react"

export const Texto = () => {
    const [show, setShow] = useState(false);

    const mostrar = () =>{
        setShow(true);
    }

    const esconder = () =>{
        setShow(false);
    }

    const toogle = () => {
        if(show){
            setShow(false);
        }else{
            setShow(true);
        }
    }

    const toogle1 = () => {
        setShow(!show);
    }

  
    return(
        <div>
            <h1>Efeito mostrar e Esconder</h1>

            <button onClick={mostrar} className="btn btn-success w-50 mr-3">Mostar</button>
            <button onClick={esconder} className="btn btn-danger w-50">Esconder</button>
            <hr />
            <button onClick={toogle1} className="btn btn-warning w-100">Toogle</button>
            <hr />
            <button onClick={toogle1} className="btn btn-info w-100">
                {show ? 'Ocultar' : 'Mostrar'}
            </button>

            {show === true &&
                <p className="alert alert-primary mt-2">
                    Bla bla bla ...
                </p>
            }
        </div>
    )
}