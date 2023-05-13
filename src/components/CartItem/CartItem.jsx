import { useContext } from 'react'
import { formatearPeso } from '../../asyncmock'
import './CartItem.css'
import { CarritoContext } from '../../context/CarritoContext'

const CartItem = ({item, cantidad}) => {

    const {eliminarDelCarrito}=useContext(CarritoContext)

    //manejador para eliminar del carrito
    const handlerEliminar = ()=>{
        eliminarDelCarrito(item.id)
    }
    
return (
    <div className="contenedor--cart">
            <div className="contenedorZapatilla contenedorZapatilla--cart ">
                <img
                    className="imagenZapatilla imagenZapatilla--cart"
                    src={item.img}
                    alt={item.nombre}
                />
                <div className="detalles detalles--cart">
                    <div className="nombreMarcaDescripcion nombreMarcaDescripcion--cart">
                        <div>
                            <h2 className="marca marca--cart">{item.marca}</h2>
                            <h3 className="nombre nombre--cart">{item.nombre}</h3>
                        </div>
                    </div>
                </div>
                <div className='precioCantidad'>
                <div><p className='cantidad'>X {cantidad}</p></div>
                    <p className='precio'>{formatearPeso.format(item.precio * cantidad)}</p>
                </div>
                <div className='contenedorEliminar'>
                    <button className='mas mas--cart' onClick={handlerEliminar}>X</button>
                </div>
            </div>
        </div>
)
}

export default CartItem