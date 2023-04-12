import { formatearPeso } from "../../asyncmock";
import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ precio }) => {
    const [contador, setContador] = useState(1);
    const stock = 10;
    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    };

    const decrementar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    };

    function onAdd() {
        console.log(`Se a agregado ${contador} items al carrito`);
    }

    const precioFinal = formatearPeso.format(precio * contador);

    return (
        <div className="contadorPrecio">
            <div className="contenedorContador">
                <div className="contador">
                    <button
                        className="menos"
                        onClick={decrementar}
                    >
                        -
                    </button>
                    <p className="cuenta">{contador}</p>
                    <button
                        className="mas"
                        onClick={incrementar}
                    >
                        +
                    </button>
                </div>
                <button
                    className="button agregar"
                    onClick={onAdd}
                >
                    <span class="transition buttonAgregar"></span>
                    <span class="gradient"></span>
                    <span class="label textButton">Agregar al Carrito</span>
                </button>
            </div>
            <div className="precioUnico">{precioFinal}</div>
        </div>
    );
};

export default ItemCount;
