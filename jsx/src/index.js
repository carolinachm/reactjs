// importação dos modulos

import React from 'react';
import ReactDOM from 'react-dom';

//Sem JSX
//const elemento = React.createElement('h1', {}, 'Sem jsx')

//ReactDOM.render(elemento, document.getElementById('root'))

//Com JSX
ReactDOM.render(<h1>Com JSX</h1>, document.getElementById('root'))