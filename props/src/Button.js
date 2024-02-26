import React from "react";


function Button(props){
    return
    <button onClick={props.onClick}>Clique em mim</button>;
}
// Componente funcional
function Clicar(){
    //funcao
    function clicado(){
        alert('Botao foi clicado');
    }
     return(
    <div>
        <Button onClick={clicado}/>
    </div>
);
   
}
export default Clicar;