import React, { useContext, useState } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import './checkout.css'
import CarritoCheckOut from '../CarritoCheckOut/CarritoCheckOut';
import { formatearPeso } from '../../asyncmock';

const Checkout = () => {
    const {carrito, vaciarCarrito}=useContext(CarritoContext)
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("")

    const total = carrito.reduce((total, producto)=>
        total + (producto.item.precio * producto.cantidad),0)

  return (
    <div>
      <div className='detailsCheckout'>
        <p className='detailName'>Producto</p>
        <p className='detailName'>Marca</p>
        <p className='detailName'>Nombre</p>
        <p className='detailName'>Cantidad</p>
        <p className='detailName'>Precio</p>
      </div>
      <div className='contenedorCheckout'>{carrito.map(item=><CarritoCheckOut key={item.item.id}{...item}/>)}
        <div className='checkout'>
            <p className='itemTotal'>Total: {formatearPeso.format(total)}</p>
        </div>
      </div>
    </div>
    
    
  )
}

export default Checkout