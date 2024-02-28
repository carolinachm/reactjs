//importar modulos
import React from "react";
import ReactDOM from "react-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './estilo.css'
import Formulario from "./Formulario";
import Tabela from "./Tabela";
//Componentes
class Principal extends React.Component{
    //construtor
    constructor(props) {
        super(props);
        this.state = {
            "nome": "",
            "idade": null
        }
    }
    //função para preencher os campos
    preencherFormulario = (campo) =>{
        this.setState({[campo.target.name]: campo.target.value});
    }

    //funcao de clique
    aoClicar = (botao)  => {
        botao.preventDefault();
        //console.log(this.state)
        var copiaVetor = [...this.state.vetor];

        copiaVetor.push({
            'nome': this.state.nome,
            'idade': this.state.idade
        });
        this.setState({vetor : copiaVetor});

    }
    render() {
        return(
            <div>
            <h1>Inciando o projeto final</h1>
                <Formulario funcaoBotao={this.aoClicar} funcaoCampo={this.preencherFormulario} />
                <Tabela dados={this.state.vetor} />
        </div>
        )
    }
}
//Render
ReactDOM.render(
    <Principal />,
    document.getElementById('root'))