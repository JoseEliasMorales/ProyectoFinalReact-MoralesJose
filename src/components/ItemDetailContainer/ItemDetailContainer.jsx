import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { db } from "../../services/firebase/config";
import { getDoc, doc } from "firebase/firestore";
import { Icon } from "@iconify/react";

const ItemDetailContainer = () => {
    const [zapatilla, setZapatilla] = useState([]);
    const [cargando, setCargando] = useState(false);

    const { idZapatilla } = useParams();

    //consultamos la base de datos para un producto específico
    useEffect(() => {
        const unaZapatilla = doc(db, "zapatillas", idZapatilla);

        getDoc(unaZapatilla)
            .then((res) => {
                const nuevaZapatilla = { id: res.id, ...res.data() };
                setZapatilla(nuevaZapatilla);
            })
            .catch((error) => console.error(error))
            .finally(() => {
                setCargando(true);
            });
    }, [idZapatilla]);

    return (
        <div>
            {cargando ? (
                <ItemDetail {...zapatilla} />
            ) : (
                <div className="icon">
                    <Icon
                        icon="svg-spinners:12-dots-scale-rotate"
                        width="200"
                    />
                </div>
            )}
        </div>
    );
};

export default ItemDetailContainer;
