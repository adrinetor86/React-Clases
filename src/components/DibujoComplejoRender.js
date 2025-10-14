import {Component} from "react";

class DibujoComplejoRender extends Component{

    lista=[]
    //NECESITAMOS UN ARRAY CON NOMBRE, Y DICHO ARRAY
    //DEBE ESTAR DECLARADO EN STATE PARA ACTUALIZAR EL DIBUJO

    state={
        nombres:["Lucia","Diana","Antonia","Sofia","Adrian"]

    }
    generarNombre=()=>{
        this.state.nombres.push("NUEVO NOMBRE")

        this.setState(
            {
                nombres:this.state.nombres
            }
        )
    }

    render(){
        return(<div>
            <h1>Dibujo Complejos Render</h1>
            <button onClick={this.generarNombre}>Añadir Nombre</button>
            {
                //ESTE CODIGO ES JSX DE REACT
                //EL CODIGO LOGICO DEBE CONTENER UN RETURN
                this.state.nombres.map((name,index) =>{
                    //ESTE CODIGO NO PUEDE ESTAR VACIO NECESITA UN RETURN
                    // PARA EL DIBUJO
                    return (<h3 style={{color:"green"}} key={index}>{name}</h3>)
                })

            }
        </div>)
    }
}
export default DibujoComplejoRender