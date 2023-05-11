import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { useState } from "react";
import "./CrearUsuario.css";
import "firebase/auth";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const CrearUsuario = (props) => {
    const [nick, setNick] = useState("");
    const [email, setEmail] = useState("");
    const [contrasenia, setContrasenia] = useState("");
    const [repetirContrasenia, setRepetirContrasenia] = useState("");
    const [repetirEmail, setRepetirEmail] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorContrasenia, setErrorContrasenia] = useState("");

    const auth = getAuth();

    const MySwal = withReactContent(Swal);

    const handlerCrearUsuario = (e) => {
        e.preventDefault();
        setErrorEmail("");
        setErrorContrasenia("");

        if (email !== repetirEmail) {
            setErrorEmail("* El email no coincide.");
            return;
        }

        if (contrasenia !== repetirContrasenia) {
            setErrorContrasenia("*Las contraseñas no coinciden");
            return;
        }

        createUserWithEmailAndPassword(auth, email, contrasenia)
            .then(async function () {
                await updateProfile(auth.currentUser, { displayName: nick });
            })
            .then(props.setIniciarOCrear(true))
            .then(
                MySwal.fire({
                    icon: "success",
                    title: "Usuario creado con exito!",
                })
            );
    };

    return (
        <div className="iniciarSesion">
            <form onSubmit={handlerCrearUsuario}>
                <div className="usuario">
                    <input
                        type="text"
                        id="nick"
                        value={nick}
                        onChange={(e) => setNick(e.target.value)}
                        required
                    />
                    <label htmlFor="usuario">Nick Name</label>
                </div>
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
                        type="text"
                        id="repUsuario"
                        value={repetirEmail}
                        onChange={(e) => setRepetirEmail(e.target.value)}
                        required
                    />
                    <label htmlFor="repUsuario">Repetir Email</label>
                    {errorEmail && <p className="error">{errorEmail}</p>}
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
                <div className="usuario">
                    <input
                        type="password"
                        id="repPassword"
                        value={repetirContrasenia}
                        onChange={(e) => setRepetirContrasenia(e.target.value)}
                        required
                    />
                    <label htmlFor="repPassword"> Repetir Contraseña</label>
                    {errorContrasenia && (
                        <p className="error">{errorContrasenia}</p>
                    )}
                </div>
                <button
                    className="btnIniciarSesion"
                    type="submit"
                >
                    Registrarse
                </button>
            </form>
        </div>
    );
};

export default CrearUsuario;
