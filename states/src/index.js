import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";

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

ReactDOM.render(<Componente />, document.getElementById('root'))