import { useState, createContext, useEffect } from "react";

export const CarritoContext = createContext({ carrito: [] })

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])

    useEffect(() => {
        const consultaCarrito = JSON.parse(localStorage.getItem('carrito'))

        if (consultaCarrito) {
            setCarrito(consultaCarrito)
        }
    }, [])

    const agregarAlCarrito = (item, cantidad) => {
        if (enCarrito(item.id)) {
            console.log("producto a agregado");
        } else {
            setCarrito(prev => [...prev, { item, cantidad }])
        }
    }

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])







    const eliminarDelCarrito = (id) => {
        const actualizarCarrito = carrito.filter(prod => prod.item.id !== id)
        setCarrito(actualizarCarrito)
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }



    const enCarrito = (id) => {
        return carrito.some((prod) => prod.item.id === id)
    }

    return (
        <CarritoContext.Provider value={{ carrito, agregarAlCarrito, vaciarCarrito, eliminarDelCarrito }}>
            {children}
        </CarritoContext.Provider>
    )

}
