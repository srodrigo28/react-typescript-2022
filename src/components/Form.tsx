export const Form = () =>{
    return(
        <form>
            <div className="col">
                <label>Nome</label>
                <input type="text" className="form-control" />
            </div>
            <div className="col">
                <label>Email</label>
                <input type="text" className="form-control"/>
            </div>
            <div className="col">
                <label>Senha</label>
                <input type="text" className="form-control"/>
            </div>
        </form>
    )
}