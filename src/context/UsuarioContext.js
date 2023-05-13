import React, { createContext, useEffect, useState } from 'react'

export const UsuarioContext = createContext({usuario:[]})

export const UsuarioProvider = ({children}) => {
    const [usuario, setUsuario]=useState(null)

    useEffect(()=>{
      const consultaUsuario = JSON.parse(localStorage.getItem('usuario'))
      if(consultaUsuario){
        setUsuario(consultaUsuario)
      }
    },[])

    const loginUsuario = (user)=>{
        setUsuario(user)
    }

    useEffect(()=>{
      localStorage.setItem('usuario', JSON.stringify(usuario))
    },[usuario])
    
    

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