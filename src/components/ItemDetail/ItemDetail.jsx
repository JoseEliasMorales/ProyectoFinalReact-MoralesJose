import { formatearPeso } from "../../asyncmock"
import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({id, nombre,precio,img,marca}) => {

    

    return (
        <div className="contenedor">
            <div className='contenedorZapatilla'>
                <img className="imagenZapatilla" src={img} alt={nombre} />
                <div className='detalles'>
                    <div className="nombreMarcaDescripcion">
                        <h2 className="marca">{marca}</h2>
                        <h3 className='nombre'>{nombre}</h3>
                        <p className='descripcion'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius unde explicabo dolorum eligendi cupiditate ratione officiis dolor maxime quidem, ad mollitia reiciendis atque necessitatibus culpa magnam, eum debitis accusantium delectus?</p>
                    </div>
                    <div className="contadorPrecio">
                        <ItemCount/>
                        <h4 className="precioUnico">{formatearPeso.format(precio)}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail