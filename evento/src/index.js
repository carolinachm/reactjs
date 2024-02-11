// importar modulo
import React from "react";
import ReactDOM from "react-dom";


//Componentes 
class MeuComponente extends React.Component{
    
    // Funcao
    mensagem(){
        alert('Hello Word')
    }
    render(){
        return <button onClick={this.mensagem}>Clique aqui</button>
    }
}

//Render
ReactDOM.render(<MeuComponente />, document.getElementById('root'))