import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUnaZapatilla } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [zapatilla, setZapatilla] = useState([]);

    const { idZapatilla } = useParams();

    useEffect(() => {
        getUnaZapatilla(idZapatilla)
            .then((response) => setZapatilla(response))
            .catch((error) => console.error(error));
    }, [idZapatilla]);

    console.log(zapatilla);

    return (
        <div>
            <ItemDetail {...zapatilla} />
        </div>
    );
};

export default ItemDetailContainer;
