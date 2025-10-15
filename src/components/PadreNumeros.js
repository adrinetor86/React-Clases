import {Component} from "react";
import HijoNumeros from "./HijoNumeros";

class PadreNumeros extends Component {

  /*  constructor(props) {
        super(props);
        this.state = {
            numeros: Array.from({ length: 4 }, () => parseInt(Math.random() * 100)),
            suma: 0,
        };
    }*/

    state = {
        suma:0,
        numeros:[2,3,4,5]
    }


    aniadirNumeros=()=>{

        var numNuevo=parseInt(Math.random()*100)
        this.state.numeros.push(numNuevo)
        this.setState(
            {
                numeros:this.state.numeros
            }
        )
        // console.log(numNuevo)
    }

    sumarNumeros=(numeroSumado)=>{
        var cantidad=this.state.suma+numeroSumado;

        this.setState({
            suma:cantidad,
        })
    }

    restarNumeros=(numeroRestado)=>{
        var cantidad=this.state.suma-numeroRestado;

        this.setState({
            suma:cantidad,
        })
    }

    render(){

        return (
            <div>
                <h1>PADRE</h1>
                <h4 style={{backgroundColor: "lightgreen"}}>La suma es: {this.state.suma}</h4>
                <button onClick={this.aniadirNumeros}>Añadir numero</button>

                {/*  {
                 this.state.numeros.map((numero,index)=>{
                     return (
                    <HijoNumeros key={index}
                                 numero={numero}
                                 sumaNum={this.sumarNumeros}
                                 restaNum={this.restarNumeros}
                    ></HijoNumeros>
                         )
                })
                }*/}

                <table border="1" style={{marginTop: "10px", borderCollapse: "collapse"}}>
                    <thead>
                    <tr>
                        <th>Número</th>
                        <th>Sumar</th>
                        <th>Restar</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.numeros.map((numero, index) => (
                        <HijoNumeros
                            key={index}
                            numero={numero}
                            sumaNum={this.sumarNumeros}
                            restaNum={this.restarNumeros}
                        />
                    ))
                    }
                    </tbody>
                </table>

            </div>

        );
    }

}
export default PadreNumeros
