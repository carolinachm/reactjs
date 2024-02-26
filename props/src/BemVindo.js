import React from "react";

//Componete
function BemVindo(props){
    
    if(props.isLoggeIn){
        return
        <div>Bem-Vindo de volta</div>;
    }else{
        return
         <div>
            Por favor, faça login
        </div>;
    }
}
export default BemVindo;