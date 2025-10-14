import {Component} from "react";

//PODEMOS DECLARAR METODOS FUERA DE LA CLASE
//DICHOS METODOS NO PUEDEN UTILIZAR NADA DEL COMPONENT
function metodoAbsurdo(){
    console.log("Método sin funcionalidad");
}

class Contador extends Component {
    //LAS VARIABLES SE DECLARAN A NIVEL DE CLASE
    //NO SE UTILIZAN PALABRAS COMO var, let o const
    numero =1;
    //CON LOS METODOS SUCEDE EXACTAMENTE LO MISMO

    incrementarNumero=()=>{
        //PARA ACCEDER A LAS VARIABLES DE CLASE
        //DE FORMA OBLIGATORIA USAREMOS LA PALABRA this
        this.numero+=1;
        console.log("Valor de número: " + this.numero);

    }
    //LAS VARIABLES STATE SON DECLARADAS EN EL OBJETO DE LA CLASE
    state={
        valor:parseInt(this.props.inicio)
    }

    incrementarValor=()=>{
        //EN SETSTATE SE MODIFICAN OBJETOS CON SU KEY:VALUE
        this.setState(
            {valor:this.state.valor+1}
        )
    }
    //LA SINTAXIS DEL CODIGO HTML HA CAMBIADO

    render(){
        return(<div>
            <h1 style={{color:"blue"}}>Ejemplo Contador JSX : {this.props.inicio}</h1>
            <h3 style={{color:"green"}}>
                Valor:{this.state.valor}
            </h3>
            {/*LA LLAMADA A LOS METODOS SE REALIZA CON this
            Y NO SE UTILIZA NI LAMBDA NI ()*/}
            <button onClick={this.incrementarNumero}>Incrementar Número</button>
            <button onClick={()=>{
                //SI ES EXTERNO NO LLEVA this
                metodoAbsurdo();
                this.incrementarNumero();
            }}>
            {/*    TENEMOS MULTIPLES MANERAS DE REALIZAR LLAMADAS*/}
                Otra sintaxis con funcion anonima
            </button>

            <button onClick={this.incrementarValor}>Incrementar Valor</button>
        </div>)
    }
}

export default Contador;

