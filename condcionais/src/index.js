import React from "react";
import ReactDOM from "react-dom"

//Componente
class Componente extends React.Component{

    //Contrutor
    constructor(props){
        super (props);

        this.state = {exibir : false};
    }

    //funcao
    alterarStats = () => {
        //criar uma variavel
        let converter = !this.state.exibir;

        this.setState({exibir : converter});
    }

    //
    render(){
        //condicional
        let meuTexto = ''

        if(this.state.exibir == true){
            meuTexto = <h1>Olá! Utilizando condicionais</h1>
        }else{
            meuTexto = ''
        }
        return(
            <div>
                {meuTexto}
                <button onClick={this.alterarStats}>Clique aqui</button>
            </div>
        )
    }
}
ReactDOM.render(<Componente />, document.getElementById('root'))