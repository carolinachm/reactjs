import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import Contador from "./Contador";

class Componente extends React.Component {

    //Contrutor é primeira funcionalidade que componente executa
    constructor(prosp) {
        super(prosp);

        this.state = { nome: 'Carolina' }
    }
    //Render
    render() {
        return <h1>{this.state.nome}</h1>
    }
}

ReactDOM.render(
    <div>
        <Componente />
        <Contador />
    </div>,
 document.getElementById('root')
 )