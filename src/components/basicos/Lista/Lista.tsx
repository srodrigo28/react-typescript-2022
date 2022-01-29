export const Lista = () =>{
    let list = [
        'yasmin brunet',
        'douglas sousa',
        'aline morais',
        'cleber yoused',
        'bruna nascimento'
    ];
    let contas = [
        {desricao: 'energia', valor: 200, mes: 'janeiro', ano: '2022'},
        {desricao: 'escola', valor: 600,  mes: 'janeiro', ano: '2022'},
        {desricao: 'carros', valor: 1700, mes: 'janeiro', ano: '2022'},
    ];
    return(
        <div>
            <h2>Lista de presença</h2>
            <div>
                {list.map((item, index)=>(
                    <li className="" key={index}>{item}</li>
                ))}
            </div>
            <div className="mt-5">
                <h2>Lista de Contas</h2>
                {contas.map((row, index)=>(
                    <li className="" key={index}> {row.desricao} - {row.valor} - {row.mes} - {row.ano} </li>
                ))}
            </div>
        </div>
    )
}