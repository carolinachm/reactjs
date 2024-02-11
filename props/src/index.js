// importe modulos
import React from "react";
import ReactDOM from "react-dom";

//Componentes
class Componentes extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.informacoes.nome}</p>
                <p>{this.props.informacoes.idade}</p>
            </div>
            )
    }
}
//Passando uma variavel por props
var dados = {nome:"Carolina", idade:40}
// Render
ReactDOM.render(<Componentes informacoes={dados}/>, document.getElementById('root'))