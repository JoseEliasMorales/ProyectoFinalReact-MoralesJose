import { useState } from "react";
import "./iniciarSesion.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const IniciarSesion = ({setUsuario}) => {
    const auth = getAuth()

    const [email, setEmail]=useState("")
    const [contrasenia, setContrasenia]=useState("")

    const handleIniciarSesion = (e)=>{
        e.preventDefault()

        signInWithEmailAndPassword(auth, email, contrasenia)
            .then(setUsuario(auth.currentUser))
    }

    return (
        <div className="iniciarSesion">
            <form onSubmit={handleIniciarSesion}>
                <div className="usuario">
                    <input
                        type="text"
                        id="usuario"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        required
                    />
                    <label htmlFor="usuario">Email</label>
                </div>
                <div className="usuario">
                    <input
                        type="password"
                        id="password"
                        value={contrasenia}
                        onChange={(e)=>setContrasenia(e.target.value)}
                        required
                    />
                    <label htmlFor="password">Contraseña</label>
                </div>
                <button className="btnIniciarSesion" type="submit">Iniciar Sesion</button>
            </form>
        </div>
    );
};

export default IniciarSesion;
