// importar modulos
import React from "react";
import ReactDom  from "react-dom";


//Componente
class MeuComponente extends React.Component{

    //Contrutor é primeiro metodo que se executa
    constructor(props){
        super(props)

        this.state = {texto: this.props.textoInicial}
    }
    //Funçao
    minhaFuncao = (e) => {
        this.setState({
            texto: e.target.value
        })
    }
    //
    render(){
        return (
            <div>
                <h1>{this.state.texto}</h1>
                <input type="text" onChange={this.minhaFuncao} value={this.state.texto}/>
            </div>
        )
    }

}
//Render
ReactDom.render(<MeuComponente textoInicial='Digite algo...'/>, document.getElementById('root'))