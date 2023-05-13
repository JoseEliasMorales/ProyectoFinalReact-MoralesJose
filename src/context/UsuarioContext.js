import React, { createContext, useEffect, useState } from "react";

export const UsuarioContext = createContext({ usuario: [] });

export const UsuarioProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(null);

    //consultamos si hay un usuario logueado
    useEffect(() => {
        const consultaUsuario = JSON.parse(localStorage.getItem("usuario"));
        if (consultaUsuario) {
            setUsuario(consultaUsuario);
        }
    }, []);

    //funcion login
    const loginUsuario = (user) => {
        setUsuario(user);
    };

    //Guardamos el usuario en la base al loguear
    useEffect(() => {
        localStorage.setItem("usuario", JSON.stringify(usuario));
    }, [usuario]);

    //cerramos sesion
    const cerrarUsuario = () => {
        setUsuario(null);
    };

    return (
        <UsuarioContext.Provider
            value={{ usuario, loginUsuario, cerrarUsuario }}
        >
            {children}
        </UsuarioContext.Provider>
    );
};

export default UsuarioContext;
