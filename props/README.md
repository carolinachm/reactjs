# Projeto react - Props

Os componentes comunicam-se passando dados uns aos outros através de um mecanismo chamado props. Os props permitem que voce passa informações de um componente pai para um componente filho

## O que são props?

Props são objetos que contêm daddos a serem passados de um componente para outro. Os props são argumentos de uma função, eles são imultaveis, o que significa que um componente não pode alterar seus proprios props

- Como acessar um props

``` bash
import React from 'react';

//função 
function Greeting (props){
    return(
        <div>
        Olá, {props.name}!
        </div>
    )
}
export default Greeting;

App.js

import React from 'react';
import Greeting from './Greeting';

functiom App(){
    return(
        <div>
        <Greeting name="Mundo" />
        </div>
    )
}
```