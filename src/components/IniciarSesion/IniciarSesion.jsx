import { useState } from "react";
import "./iniciarSesion.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Toast, MySwal } from "../../asyncmock";
const IniciarSesion = ({ setUsuario }) => {
    const auth = getAuth();

    const [email, setEmail] = useState("");
    const [contrasenia, setContrasenia] = useState("");


    //manejador para iniciar sesion
    const handleIniciarSesion = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, contrasenia)
            .then(()=>{
                setUsuario(auth.currentUser)
            }
            )
            .then(()=>{
                Toast.fire({
                    icon:'success',
                    title:"Sesion iniciada con exito"
                })
            })
            .catch(()=>{
                MySwal.fire({
                    icon:'error',
                    title:"Usuario o contraseña incorrecto"
                })
            })
    };

    return (
        <div className="iniciarSesion">
            <form onSubmit={handleIniciarSesion}>
                <div className="usuario">
                    <input
                        type="text"
                        id="usuario"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label htmlFor="usuario">Email</label>
                </div>
                <div className="usuario">
                    <input
                        type="password"
                        id="password"
                        value={contrasenia}
                        onChange={(e) => setContrasenia(e.target.value)}
                        required
                    />
                    <label htmlFor="password">Contraseña</label>
                </div>
                <button
                    className="btnIniciarSesion"
                    type="submit"
                >
                    Iniciar Sesion
                </button>
            </form>
        </div>
    );
};

export default IniciarSesion;
