type Props = {
    text: string;
    cor: string;
}

export const Botao = ( {text, cor}: Props ) =>{
    return(
        <button className="btn ${cor}">{text}</button>
    )
}