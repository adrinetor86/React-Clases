import {Component} from "react";
import HijoDeportes from "./HijoDeportes";

class PadreDeportes extends Component {
   deportes=["Curling","Petanca","Poker","Futbol"]


    //NECESITAMOS UNA VARIABLE STATE PARA VISUALIZAR EL DEPORTE FAVORITO

    state={
       favorito:""
    }
    //NECESITAMOS UN METODO QUE SERA INVOCADO POR EL HIJO
    //AL PULSAR SOBRE EL BOTON DE SELECCIONAR
    mostrarDeporteFav=(deporteSeleccionado)=>{
       this.setState({
           favorito:deporteSeleccionado
       });
    }
    render(){
        return (
            <div>
                <h1>Padre</h1>
                <h4 style={{color:"black",backgroundColor:"lightgreen"}}>Su deporte favorito es:{this.state.favorito}</h4>
                {
                    this.deportes.map((deporte,index)=>{
                        return (<HijoDeportes key={index}
                                              deporte={deporte}
                                              mostrarFavorito={this.mostrarDeporteFav}/>
                        )
                    })
                }
            </div>
        );
    }
}

export default PadreDeportes;