import React, { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import "./checkout.css";
import { formatearPeso } from "../../asyncmock";
import { Link } from "react-router-dom";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import flecha from './flecha.png'

const Checkout = () => {
  const { carrito } = useContext(CarritoContext);

  const total = carrito.reduce(
    (total, producto) => total + producto.item.precio * producto.cantidad,
    0
  );


  return (
    <>
      <h3 className="tituloResumen">Resumen de tu compra</h3>
      <div className="contenedorItemsCheckout">
        <div className="formCheckout">
          <div className="contenedorDetailsCheckout">
            <div className="detailsCheckout">
              <p className="detailName">Producto</p>
              <p className="detailName">Marca</p>
              <p className="detailName">Nombre</p>
              <p className="detailName">Cantidad</p>
              <p className="detailName">Precio</p>
            </div>
            <div className="contenedorCheckout">
              {carrito.map((prod) => (
                <div
                  className="checkout"
                  key={prod.item.id}
                >
                  <img
                    className="imgCheckout"
                    src={prod.item.img}
                    alt={
                      "zapatilla " +
                      prod.item.marca +
                      " " +
                      prod.item.nombre
                    }
                  />
                  <p className="itemCheckout">
                    {prod.item.marca}
                  </p>
                  <p className="itemCheckout">
                    {prod.item.nombre}
                  </p>
                  <p className="itemCheckout">
                    x {prod.cantidad}
                  </p>
                  <p className="itemCheckout">
                    {formatearPeso.format(
                      prod.item.precio * prod.cantidad
                    )}
                  </p>
                </div>
              ))}
              <div className="checkout">
                <p className="itemTotal">
                  Total: {formatearPeso.format(total)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="botonPedido">
      {
        total===0?" ":<Link to='/payment' className="button pedido">Confirmar pedido y proceder al pago</Link>
      }
      </div>
      <Link to='/' className="button seguirComprando"><img src={flecha} alt=" " className="flecha"/> Seguir Comprando</Link>
    </>
  );
};

export default Checkout;
