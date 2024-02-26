//importando modulo
import React from "react";
import ReactDOM from "react-dom"

//componente
class Componente extends React.Component{

    //Construtor
    constructor(props) {
        super(props);
        this.state = {
            cor: 'vermelho',
            data: new Date()
        }

    }
    //depois de realizar o render
    componentDidMount() {
        setTimeout(()=>{
            this.setState({cor: 'azul'})
        }, 2000)
    }

    render() {
        return(
            <div>
                <h1>Minha cor preferida é {this.state.cor}</h1>
                <h1>Data de hoje {this.state.data.toLocaleTimeString()}</h1>
            </div>

        )
    }
}

//render
ReactDOM.render(<Componente/>, document.getElementById("root"))