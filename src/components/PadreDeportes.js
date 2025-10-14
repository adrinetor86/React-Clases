import {Component} from "react";
import HijoDeportes from "./HijoDeportes";

class PadreDeportes extends Component {
   deportes=["Curling","Petanca","Poker","Futbol"]

    render(){

        return (
            <div>
                <h1>Padre</h1>
                {
                    this.deportes.map((deporte,index)=>{
                        return (<HijoDeportes key={index} deporte={deporte}/>)
                    })
                }
            </div>
        );
    }
}

export default PadreDeportes;