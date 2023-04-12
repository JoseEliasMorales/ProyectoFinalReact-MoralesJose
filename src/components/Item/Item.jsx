import "./Item.css";
import { Link } from "react-router-dom";
import { formatearPeso } from "../../asyncmock";
const Item = ({ id, nombre, precio, img }) => {
    return (
        <div
            className="item"
            key={id}
        >
            <img
                className="imageItem"
                src={img}
                alt={nombre}
            />
            <p className="itemTitle">{nombre}</p>
            <p className="precio">{formatearPeso.format(precio)}</p>
            <Link
                className="button"
                to={`/item/${id}`}
            >
                <span class="transition"></span>
                <span class="gradient"></span>
                <span class="label">Ver Detalles</span>
            </Link>
        </div>
    );
};

export default Item;
