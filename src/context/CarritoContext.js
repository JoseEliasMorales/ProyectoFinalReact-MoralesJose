import { useState, createContext } from "react";

export const CarritoContext = createContext({carrito:[]})

export const CarritoProvider = ({children})=>{
    const [carrito, setCarrito]= useState([])


    const agregarAlCarrito =(item, cantidad)=>{
        if(!enCarrito(item.id)){
            setCarrito(prev=>[...prev, {item, cantidad}])
        }else{
            console.log('Ya se encuentra en el carrito');
        }
    }


    const eliminarDelCarrito=(id)=>{
        const actualizarCarrito = carrito.filter(item=>item.id===id)
        setCarrito(actualizarCarrito)
    }

    const vaciarCarrito = ()=>{
        setCarrito([])
    }

    const enCarrito = (id)=>{
        return carrito.some(item=>item.id ===id)
    }

    return(
        <CarritoContext.Provider value={{carrito, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito }}>
            {children}
        </CarritoContext.Provider>
    )

}
