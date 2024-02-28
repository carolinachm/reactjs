//importando modulo
import React from "react";
import ReactDOM from "react-dom"

class Componente extends React.Component{

    //Funcao
    minhafuncao = (e)=> {
        //preventDefault não ira redirecionar a pagina depois que clicar no ok
        e.preventDefault();
        alert('Testando evento submit');
    }
    render() {
        return(
            <div>
                <h1>Utilizando onSubmit</h1>
                <form onSubmit={this.minhafuncao} action="https://ralflima.com/">
                    <input type="submit"/>
                </form>

            </div>
        )
    }
}
ReactDOM.render(<Componente/>, document.getElementById('root'))