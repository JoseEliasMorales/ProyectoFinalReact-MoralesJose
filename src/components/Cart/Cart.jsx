import { useContext } from "react"
import CartItem from "../CartItem/CartItem"
import { CarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"
import { formatearPeso } from "../../asyncmock"
import './Cart.css'



const Cart = () => {

    const {carrito, vaciarCarrito}=useContext(CarritoContext)

    const totalCantidad = carrito.reduce((total,item)=>
        total + item.cantidad, 0
    )
    
    const total = carrito.reduce((total, producto)=>
        total + (producto.item.precio * producto.cantidad),0)
    
    


    if(totalCantidad===0){
        return(
            <>
                <h2>No hay productos en el Carrito</h2>
                <Link to='/'>Volver</Link>
            </>
        )
    }else{
        return( 
            <div className="contenedorCarrito">
                <div className="carrito">
                    {carrito.map(item=> <CartItem key={item.item.id}{...item}/>)}
                </div>
                <div>
                    <div className="totalCarrito">
                        <h3 className="total">Total: {formatearPeso.format(total)}</h3>
                        <div className="vaciarFinalizar">
                            <button onClick={()=>vaciarCarrito()} className="button agregar">Vaciar Carrito</button>
                            <Link to='/checkout' className="button finalizar finalizar--compra" value={total} >
                                <span className="buttonFinalizar"></span>
                                <span className="gradient"></span>
                                <span className="label textButton">Finalizar Compra</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart