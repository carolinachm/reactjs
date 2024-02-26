// importe modulos
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Validacao from "./Validacao";
import PropDefault from "./PropDefault";
import BemVindo from "./BemVindo";
import Clicar from "./Button";

//Componentes
class Componentes extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.informacoes.nome}</p>
                <p>{this.props.informacoes.idade}</p>
            </div>
        )
    }
}
//Passando uma variavel por props
var dados = { nome: "Carolina", idade: 40 }
// Render
ReactDOM.render(
    <div>
        <Componentes informacoes={dados} />
        <App />
        <Validacao name = "Informando o tipo do objeto passado no props" />
        <PropDefault />
        <BemVindo />
       
    </div>,
    document.getElementById('root')
)