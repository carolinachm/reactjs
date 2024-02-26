import React from "react";

function PropDefault(props){
    return(
        <div>
            Olá, {props.name}
        </div>
    );

}
PropDefault.defaultProps = {
    name: "Trabalhando com valores default",
}

export default PropDefault;