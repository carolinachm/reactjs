import React from "react";
import PropTypes from "prop-types"

function Validacao(props){
    return(
        <div>
            Olá, {props.name}!
        </div>
    );
}
//PropTypes é usado para informar o tipo do objeto
Validacao.propType = {
    name: PropTypes.string.isRequired
}

export default Validacao;