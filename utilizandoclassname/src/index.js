//importando modulo
import React from "react";
import ReactDOM from "react-dom";

//importar CSS
import './estilo.css'

//Componentes
class Componente extends React.Component{
    render() {
        return(
            <div>
                <h1 className='minhaClasse'>Utilizando className</h1>
            </div>
        )
    }
}
//Render
ReactDOM.render(<Componente />, document.getElementById("root"))