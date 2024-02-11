// importar modulo
import React from "react";
import ReactDOM  from "react-dom";

// Componente
class MeuComponente extends React.Component{

    //Função 
    mensagem(nome){
        alert('Olá' + nome)
        console.log(this)
    }
    //Render
    render(){
        return <button onClick={this.mensagem.bind(this,' Carolina')}>Clique aqui</button>
    }
}
// Render
ReactDOM.render(<MeuComponente />, document.getElementById('root'))