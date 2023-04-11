import React from 'react'

const ItemDetail = ({id, nombre,precio,img}) => {

    const formatearPeso = new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
        minimumFractionDigits: 0,
    });

    return (
        <div className='contenedorZapatilla'>
            <img src={img} alt={nombre} />
            <div className='detalles'>
                <h2 className='nombre'>{nombre}</h2>
                <p className='descripcion'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius unde explicabo dolorum eligendi cupiditate ratione officiis dolor maxime quidem, ad mollitia reiciendis atque necessitatibus culpa magnam, eum debitis accusantium delectus?</p>
                <h3>{formatearPeso.format(precio)}</h3>
            </div>
        </div>
    )
}

export default ItemDetail