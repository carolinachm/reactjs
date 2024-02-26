// importação dos modulos
import React from "react";
import ReactDOM from "react-dom";
import RenderizandoListas from "./RenderizandoListas";

//Componentes
class Componentes  extends React.Component{

    render() {
        //Vetor
        let cores = ['azul', 'amarelo', 'vermelho']
        //Listar
        let listar = cores.map((cor, index) =>{
            return <li key={index}>{index} - {cor}</li>
        })
        //Retorno
        return(
            <ul>
                {listar}
            </ul>
        )
    }

}
const numeros = [1,2,3,4,5,6,7,8,9];
//Render
ReactDOM.render(
    <div>
        <Componentes />
        <RenderizandoListas numeros={numeros}/>
    </div>
   , document.getElementById('root'));