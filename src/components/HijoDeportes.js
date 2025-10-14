import {Component} from "react";

class HijoDeportes extends Component {

    state = {
        favorito:""
    }
    mostrarFavorito=()=>{
        this.setState({
                favorito:this.props.deporte
            }
        )
    }
    render(){
        return (
            <div>
                <h5 style={{color:"blue"}}>Deporte: {this.props.deporte}</h5>
                <h2 style={{color:"green"}}>Su deporte favorito es: {this.state.favorito}</h2>
                <button onClick={this.mostrarFavorito}>Seleccionar Favorito</button>
            </div>
        )
    }
}


export default HijoDeportes;