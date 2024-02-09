// importar modulos

import React from 'react';
import  ReactDOM  from 'react-dom';

//Estrutura

const estrutura = 
<div>
    <h1>Meu primeiro render</h1>
    <p>Testando</p>
</div>

//Render é uma funcionalidade que permite voce utilizar html dentro do codigo
ReactDOM.render(
    estrutura,
    document.getElementById('root')
)