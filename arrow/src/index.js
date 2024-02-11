// importar modulo
import React from "react";
import { render } from "react-dom";

// Componente 
class MeuComponente extends React.Component{

    //Função
    mensagem(nome){
        alert('Olá' + nome)
        console.log(this)
    }

    minhaArrowFunction = (curso) => {
        alert('Estou fazendo o curso de ' + curso)
        console.log(this)
    }
    //Render
    render(){
        return(
            <div>
                <button onClick={this.mensagem.bind(this, ' Carolina')}>Clique aqui</button>
                <button onClick={()=> this.minhaArrowFunction('ReactJS')}>Arrow function </button>
            </div>
        )
    }

}
render(<MeuComponente/>, document.getElementById('root'))