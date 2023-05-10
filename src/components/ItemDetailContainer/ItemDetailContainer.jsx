import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { db } from "../../services/firebase/config";
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [zapatilla, setZapatilla] = useState([]);

    const { idZapatilla } = useParams();

    useEffect(() => {
        const unaZapatilla = doc(db,'zapatillas', idZapatilla)


        getDoc(unaZapatilla)
            .then(res=>{
                const nuevaZapatilla = {id: res.id, ...res.data()}
                setZapatilla(nuevaZapatilla)
            })
            .catch(error => console.error(error))
    }, [idZapatilla]);

    return (
        <div>
            <ItemDetail {...zapatilla} />
        </div>
    );
};

export default ItemDetailContainer;
