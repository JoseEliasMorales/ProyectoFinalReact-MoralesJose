import React, { createContext, useState } from 'react'

export const UsuarioContext = createContext({usuario:[]})

export const UsuarioProvider = ({children}) => {
    const [usuario, setUsuario]=useState(null)

    const loginUsuario = (user)=>{
        setUsuario(user)
    }
    
    const cerrarUsuario = ()=>{
        setUsuario(null)
    }
    
  return (
    <UsuarioContext.Provider value={{usuario, loginUsuario, cerrarUsuario}}>
        {children}
    </UsuarioContext.Provider>
  )
}

export default UsuarioContext