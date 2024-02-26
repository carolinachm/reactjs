import React, { useState } from "react";

function Contador(){
    const [contar, setContar] = useState(0);

    function incremento(){
        setContar(contar + 1);
    }
    function decremento(){
        setContar(contar - 1);
    }

    return(
        <div>
            <button onClick={decremento}>Clique aqui</button>
            <span>{contar}</span>
            <button onClick={incremento}>Clique aqui</button>

        </div>
    )
}
export default Contador;