// importar modulo
import React from "react";

//Componente
class Formulario extends React.Component{

    render() {
        return (
            <div>
                <form onSubmit={this.props.funcaoBotao}>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput" className="form-label">Nome</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" name={'nome'}
                               placeholder="Informe o nome" onChange={this.props.funcaoCampo}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput2" className="form-label">idade</label>
                        <input type="number" className="form-control" id="formGroupExampleInput2" name={'idade'}
                               placeholder="Informe a idade" onChange={this.props.funcaoCampo}/>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary" >Cadastrar</button>

                    </div>
                </form>
            </div>

        );
    }
}

export default Formulario;