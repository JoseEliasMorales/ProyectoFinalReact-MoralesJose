import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import TerminarCompra from "../TerminarCompra/TerminarCompra";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ id, nombre, precio, img, marca, stock }) => {
    const [agregarCantidad, setAgregarCantidad] = useState(0);

    const { agregarAlCarrito } = useContext(CarritoContext);

    //manejador para agregar al carrito los productos y la cantidad
    const handlerQuantity = (cantidad) => {
        setAgregarCantidad(cantidad);
        const item = { id, nombre, precio, marca, img, stock };
        agregarAlCarrito(item, cantidad);
    };

    return (
        <div className="contenedor">
            <div className="contenedorZapatilla">
                <img
                    className="imagenZapatilla"
                    src={img}
                    alt={nombre}
                />
                <div className="detalles">
                    <div className="nombreMarcaDescripcion">
                        <h2 className="marca">{marca}</h2>
                        <h3 className="nombre">{nombre}</h3>
                        <p className="descripcion">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Eius unde explicabo dolorum eligendi
                            cupiditate ratione officiis dolor maxime quidem, ad
                            mollitia reiciendis atque necessitatibus culpa
                            magnam, eum debitis accusantium delectus?
                        </p>
                    </div>
                    <div className="contadorPrecio">
                        {
                            /*comprobamos si hay stock*/
                            stock === 0 ? (
                                <div className="contenedorSinStock">
                                    <p className="sinStock">
                                        Producto sin Stock
                                    </p>
                                    <Link
                                        to="/"
                                        className="button"
                                    >
                                        Volver al inicio
                                    </Link>
                                </div>
                            ) : agregarCantidad > 0 ? (
                                <div>
                                    <ItemCount
                                        precio={precio}
                                        inicial={1}
                                        stock={stock}
                                        funcionAgregar={handlerQuantity}
                                    />
                                    <Link
                                        to="/cart"
                                        className="finalizarCompra"
                                    >
                                        <TerminarCompra />
                                    </Link>
                                </div>
                            ) : (
                                <ItemCount
                                    precio={precio}
                                    inicial={1}
                                    stock={stock}
                                    funcionAgregar={handlerQuantity}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
