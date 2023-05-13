import { useState, createContext, useEffect } from "react";
import { Toast } from "../asyncmock";


export const CarritoContext = createContext({ carrito: [] });

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    //consulta la base de datos local para ver si hay productos en el carrito
    useEffect(() => {
        const consultaCarrito = JSON.parse(localStorage.getItem("carrito"));
        if (consultaCarrito) {
            setCarrito(consultaCarrito);
        }
    }, []);

    

    //funcion para agregar al carrito
    const agregarAlCarrito = (item, cantidad) => {
        if (enCarrito(item.id)) {
            Toast.fire({
                icon:'error',
                title:'Ya se encuentra en el carrito'
            })
        } else {
            setCarrito((prev) => [...prev, { item, cantidad }]);
            Toast.fire({
                icon:'success',
                title:"Agregado al carrito"
            })
        }
    };

    //consulta si hay algo cargado en el carrito de la base local
    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito]);

    //funcion eliminar del carrito
    const eliminarDelCarrito = (id) => {
        const actualizarCarrito = carrito.filter((prod) => prod.item.id !== id);
        setCarrito(actualizarCarrito);
    };

    //funcion para limpiar el codigo
    const vaciarCarrito = () => {
        setCarrito([]);
    };

    //funcion para consultar si el producto esta en el carrito
    const enCarrito = (id) => {
        return carrito.some((prod) => prod.item.id === id);
    };

    return (
        <CarritoContext.Provider
            value={{
                carrito,
                agregarAlCarrito,
                vaciarCarrito,
                eliminarDelCarrito,
            }}
        >
            {children}
        </CarritoContext.Provider>
    );
};
