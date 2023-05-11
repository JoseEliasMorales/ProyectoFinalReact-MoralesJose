import { useState } from "react"
import './Usuario.css'
import IniciarSesion from "../IniciarSesion/IniciarSesion"
import Zapatilla from './zapatillas.png'
import CrearUsuario from "../CrearUsuario/CrearUsuario"

const Usuario = () => {

    const [iniciarOCrear, setIniciarOCrear]= useState(true)
    const [usuario, setUsuario]=useState(null)
    console.log(usuario);


    const handleChangeCrear = ()=>{
        setIniciarOCrear(false)
    }

    const handleChangeIniciar = ()=>{
        setIniciarOCrear(true)
    }
    if(usuario===null){ 
                return (
                    <div className="sesion">
                        {
                            iniciarOCrear
                                ?<IniciarSesion setUsuario={setUsuario}/>
                                :<CrearUsuario setIniciarOCrear={setIniciarOCrear}/>
                                
                        }
                        <p>ó</p>
                        {
                            iniciarOCrear
                                ?<button className="btnCrearUsuario" onClick={handleChangeCrear}>Registrarse</button>
                                :<button className="btnCrearUsuario" onClick={handleChangeIniciar}>Iniciar Sesion</button>
                        }
                        <hr />
                        <p>O puedes autenticarte de la siguiente forma</p>
                        <img className="zapatillaPintura" src={Zapatilla} alt="pintura zapatillas" />
                    </div>
                )
        }else{
            return(
                <div className="sesion"> 
                    <h2>Bienvenido {usuario.displayName}</h2>
                    <img className="zapatillaPintura" src={Zapatilla} alt="pintura zapatillas" />
                </div>
            )
            
        }
}


export default Usuario