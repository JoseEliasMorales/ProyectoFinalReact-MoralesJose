import React from 'react'
import { useState } from 'react'
import './ItemCount.css'

const ItemCount = () => {

    const [contador, setContador]=useState(1)
    const stock=10
    const incrementar = ()=>{
        if(contador<stock){
            setContador(contador +1)
        }
    }

    const decrementar = ()=>{
        if(contador>1){
            setContador(contador -1)
        }
    }

    function onAdd(){
        console.log(`Se a agregado ${contador} items al carrito`);
    }
    return (
        <div className='contenedorContador'>
            <div className='contador'>
                <p className='menos' onClick={decrementar}>-</p>
                <p className='cuenta'>{contador}</p>
                <p className='mas' onClick={incrementar}>+</p>
            </div>
            <button className="agregar" onClick={onAdd}>AGREGAR AL CARRITO</button>
        </div>
    )
}

export default ItemCount