//importando modulos
import React from "react";
import ReactDOM from "react-dom";

//Componente
class Componente extends React.Component{

    //Construtor
    constructor(props) {
        super(props);
        this.state = {
            nome:'',
            idade: null
        }
    }
    //funcao para enviar os dados para os states
    enviarParaState = (campo) => {
        this.setState(
            {
                [campo.target.name]: campo.target.value

            }
             );
    }

    render() {
        return(
            <div>
                <form>
                    <input type={"text"} placeholder={'Nome'} name={'nome'} onChange={this.enviarParaState}/>
                    <input type={"number"} placeholder={'Idade'} name={'idade'} onChange={this.enviarParaState}/>

                    <p>{this.state.nome}</p>
                    <p>{this.state.idade}</p>

                </form>
            </div>
        )
    }
}

//Render
ReactDOM.render(<Componente />, document.getElementById('root'))