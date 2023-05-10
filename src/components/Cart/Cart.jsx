import { useContext } from "react"
import CartItem from "../CartItem/CartItem"
import { CarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"



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
        <div>
            {carrito.map(item=> <CartItem key={item.id}{...item}/>)}
            <h3>Total: ${total}</h3>
            <button onClick={()=>vaciarCarrito()}>Vaciar Carrito</button>
            <Link to='/checkout'>Finalizar Compra</Link>
        </div>
        )
    }
}

export default Cart