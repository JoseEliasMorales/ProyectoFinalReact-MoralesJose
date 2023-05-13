import "./Item.css";
import { Link } from "react-router-dom";
import { formatearPeso } from "../../asyncmock";

const Item = ({ id, nombre, precio, img, marca }) => {
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
            <p className="itemTitle">
                {marca} {nombre}
            </p>
            <p className="precio">{formatearPeso.format(precio)}</p>
            <Link
                className="button"
                to={`/item/${id}`}
            >
                <span className="transition"></span>
                <span className="gradient"></span>
                <span className="label">Ver Detalles</span>
            </Link>
        </div>
    );
};

export default Item;
