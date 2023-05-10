import { formatearPeso } from '../../asyncmock'
import './CartItem.css'

const CartItem = ({item, cantidad}) => {
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
                    <p className='cantidad'>X {cantidad}</p>
                    <p className='precio'>{formatearPeso.format(item.precio * cantidad)}</p>
                </div>
                <div className='contenedorEliminar'>
                    <button className='mas mas--cart'>X</button>
                </div>
            </div>
        </div>
)
}

export default CartItem