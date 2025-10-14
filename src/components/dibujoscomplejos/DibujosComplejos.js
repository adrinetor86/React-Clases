
import {Component} from "react";

class DibujosComplejos extends Component {

    dibujarNumeros=()=>{
        let lista=[];
        for(var i = 1; i<=10;i++){
            var numero=parseInt(Math.random()*100)+1;
            //cada elemento dibujado de forma dinamica debe tener un
            //atributo key unico
            lista.push(<li key={i} >Titulo{numero}</li>);
        }
        return lista;
    }
    render() {
        return (
            <div>
                <h1>Dibujos dinamicos React</h1>
                <ul>{this.dibujarNumeros()}</ul>
            </div>
        )

    }
}
export default DibujosComplejos