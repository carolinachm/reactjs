import React from "react";

function ListItem(props) {
    return <li>{props.value}</li>;
}

function RendereizandoListas(props) {
    const numeros = props.numeros;

    const listItems = numeros.map((numero) => (
        <ListItem key={numero.toString()} value={numero} />
    ));

    return <ul>{listItems}</ul>;
}

export default RendereizandoListas;
