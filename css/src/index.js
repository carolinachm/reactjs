//importar modulos
import React from "react";
import ReactDOM from "react-dom";

//importar css
import './estilo.css';

//Componente
class Componente extends React.Component{
    render() {
        //variaveis
        const estilo = {
            color:'blue',
            borderBottom: 'solid 5px green'
        }
        return(

            <div>
                <h1 style={{color:'red', backgroundColor:'yellow'}}>CSS interno (inline)</h1>
                <h1 style={estilo}>CSS através de variáveis e constantes</h1>
            </div>
        )
    }
}
//Render
ReactDOM.render(<Componente />, document.getElementById("root"))