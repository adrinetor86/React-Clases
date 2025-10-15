import {Component} from "react";


class HijoNumeros extends Component {

    state={
        numero:this.props.numero
    }

    sumar=()=>{
        var numeroSeleccionado = this.props.numero

        this.props.sumaNum(numeroSeleccionado)
    }

    restar=()=>{
        var numeroSeleccionado = this.props.numero

        this.props.restaNum(numeroSeleccionado)
    }
    render() {
      /*  return (
            <div>
                <h3>{this.state.numero}</h3>
                <button onClick={this.sumar}>Sumar {this.state.numero}</button>
                <button onClick={this.restar}>Restar {this.state.numero}</button>
            </div>
        )*/

        //GENERAMOS UNA ESTRUCTURA DE LA TABLA PARA QUE SE VAYAN GENERANDO LAS FILAS
        return (
            <tr>
                <td>{this.props.numero}</td>
                <td>
                    <button onClick={this.sumar}>Sumar </button>
                </td>
                <td>
                    <button onClick={this.restar}>Restar </button>
                </td>
            </tr>
        );
    }
}

export default HijoNumeros