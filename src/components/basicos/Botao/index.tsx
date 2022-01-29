type Props = {
    text: string;
    cor: string;
}

export const Botao = ( {text, cor}: Props ) =>{
    return(
        <button className='btn btn-outline-primary'>{text}</button>
    )
}