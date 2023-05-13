import { useContext } from "react";
import "./CartWidget.css";
import "./cart-outline.svg";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import {ReactComponent as Icon} from './cart-outline.svg'
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const CarritoDeCompras = () => {

    const {carrito}=useContext(CarritoContext)
    const totalCantidad = carrito.reduce((total, items)=>items.cantidad>items.item.stock?total+items.item.stock:total+items.cantidad,0)


    return (
        <Link to='/cart' className="carritoDeCompras">
            <Icon />            
            {
                totalCantidad!==0
                    ?<div className="totalCantidad">{totalCantidad}</div>
                    :``
                
            }
            {
                /* errorStock() */
            }
            
        </Link>
    );
};

export default CarritoDeCompras;
