import React from "react";

class Tabela extends React.Component {
    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Idade</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.dados.map((elemento, indice) => (
                        <tr key={indice}>
                            <td>{elemento.nome}</td>
                            <td>{elemento.idade}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Tabela;
