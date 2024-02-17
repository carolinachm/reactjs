// Validando Proṕs com PropTypes

import React from "react";
import  ReactDOM from "react-dom";
import PropTypes from "prop-types";


//Componente funcional
function Greeting(props){
    return (
    <div>
        Olá, {props.name};
    </div>
);
}
//tipo de props que um componente deve receber
Greeting.propType = {
    name: PropTypes.string.isRequired
}

ReactDOM.render(<Greeting name="Carolina" />, document.getElementById('root'));

