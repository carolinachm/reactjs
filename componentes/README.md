# Projeto React - Componentes

Componentes são partes de um sistema ou de site. Cada componente é independete, reutilizável é pode conter outros componentes

## Componentes funcionais x Componentes de Classe

- Componentes Funcionais
  
   São simples funções JS
``` bash
function Exemplo(props){
    return <div>Olá, {props.algumacoisa}!</div>
}
```

- Componentes de classe
  
  Os componentes de classe são mais tradicionais e foram a principla forma de cirar componentes antes da introdução dos Hooks em React

``` bash
import React, {Component} from 'react';

class Greeting extends Component{
    render(){
        return <div> Olá, {this.props.name}!</div>;
    }
}
export default Greeting;
```