import { useState, createContext } from "react";

export const CarritoContext = createContext({carrito:[]})

export const CarritoProvider = ({children})=>{
    const [carrito, setCarrito]= useState([])

    const agregarAlCarrito =(item,cantidad)=>{
        if(enCarrito(item.id)){
            console.log("producto a agregado");
        }else{
            setCarrito(prev=>[...prev,{item,cantidad}])
        }
    } 



    
    

    const eliminarDelCarrito=(id)=>{
        const actualizarCarrito = carrito.filter(prod=>prod.item.id!==id)
        setCarrito(actualizarCarrito)
    }

    const vaciarCarrito = ()=>{
        setCarrito([])
    }



    const enCarrito = (id)=>{
        return carrito.some((prod)=>prod.item.id===id)
    } 

    return(
        <CarritoContext.Provider value={{carrito, agregarAlCarrito, vaciarCarrito, eliminarDelCarrito}}>
            {children}
        </CarritoContext.Provider>
    )

}
