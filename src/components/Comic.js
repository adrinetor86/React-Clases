import {Component} from "react";


class Comic extends Component {


    render () {
        return (<div>
            <h2 style={{color:"blue"}}>{this.props.comic.titulo}</h2>
            <button onClick={()=>{
                //LLAMAMOS AL METODO DEL PADRE COMICS
                this.props.seleccionarFavorito(this.props.comic)
            }}>
                Seleccionar favorito
            </button>

            <button onClick={()=>{
                let index= parseInt(this.props.id)
                this.props.deleteComic(index)
            }}
        >Borrar Comic</button>

            <img src={this.props.comic.imagen}
                alt="aaa"
                 style={{width:'170px',height:'200px'}}
            />

        </div>)
    }
}
export default Comic