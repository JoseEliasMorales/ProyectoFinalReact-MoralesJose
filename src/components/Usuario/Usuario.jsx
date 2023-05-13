import { useContext, useState } from "react";
import "./Usuario.css";
import IniciarSesion from "../IniciarSesion/IniciarSesion";
import Zapatilla from "./zapatillas.png";
import CrearUsuario from "../CrearUsuario/CrearUsuario";
import UsuarioContext from "../../context/UsuarioContext";


const Usuario = () => {
    const [iniciarOCrear, setIniciarOCrear] = useState(true);
    const { usuario, loginUsuario } = useContext(UsuarioContext);

    //Logueamos el usuario
    const handleUsuario = (user) => {
        loginUsuario(user);
    };

    //Manejador para consultar formularios a mostrar(Iniciar sesion o crear usuario)
    const handleChangeCrear = () => {
        setIniciarOCrear(false);
    };

    //Manejador para consultar botones a mostrar(Iniciar o crear usuario)
    const handleChangeIniciar = () => {
        setIniciarOCrear(true);
    };

    //verificamos si hay usuario logueado
    if (usuario === null) {
        return (
            <div className="sesion">
                {
                    /*configuramos el formulario a mostrar*/
                    iniciarOCrear ? (
                        <IniciarSesion setUsuario={handleUsuario} />
                    ) : (
                        <CrearUsuario setIniciarOCrear={setIniciarOCrear} />
                    )
                }
                <p>ó</p>
                {
                    /*configuramos el boton a mostrar*/
                    iniciarOCrear ? (
                        <><p className="consultaCuenta">No Tiene cuenta? </p>
                        <button
                            className="btnCrearUsuario"
                            onClick={handleChangeCrear}
                        >
                            Regístrate
                        </button>
                        </>
                    ) : (
                        <><p className="consultaCuenta">Ya tienes cuenta?</p>
                        <button
                            className="btnCrearUsuario"
                            onClick={handleChangeIniciar}
                        >
                            Iniciar Sesion
                        </button>
                        </>
                    )
                }
                <img
                    className="zapatillaPintura"
                    src={Zapatilla}
                    alt="pintura zapatillas"
                />
            </div>
        );
    } else {
        return (
            <div className="sesion">
                <h2>Bienvenido {usuario.displayName}</h2>
                <img
                    className="zapatillaPintura"
                    src={Zapatilla}
                    alt="pintura zapatillas"
                />
            </div>
        );
    }
};

export default Usuario;
