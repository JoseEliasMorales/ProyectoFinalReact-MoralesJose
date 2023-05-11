import React, { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import './CarritoCheckout.css'
import { formatearPeso } from '../../asyncmock'

const CarritoCheckOut = ({item, cantidad}) => {
  return (
        <div className='checkout'>
            <img className='imgCheckout' src={item.img} alt={"zapatilla "+item.marca + " " + item.nombre} />
            <p className='itemCheckout'>{item.marca}</p>
            <p className='itemCheckout'>{item.nombre}</p>
            <p className='itemCheckout'>x  {cantidad}</p>
            <p className='itemCheckout'>{formatearPeso.format(item.precio * cantidad)}</p>
        </div>
  )
}

export default CarritoCheckOut