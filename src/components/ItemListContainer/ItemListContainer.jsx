import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {getDocs, collection, query,where} from 'firebase/firestore'
import { db } from "../../services/firebase/config";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import Adidas from "./adidas.png";
import Nike from "./nike.png";
import Reebok from "./reebok.png";
import Topper from "./topper.png";

const ItemListContainer = () => {

    const [zapatillas, setZapatillas] = useState([]);

    const { idCategoria } = useParams();

    useEffect(() => {

        const misZapatillas = idCategoria ? query(collection(db, "zapatillas"), where("category_id", "==", idCategoria )) : collection(db,"zapatillas")

        getDocs(misZapatillas)
                .then(res=>{
                    const nuevasZapatillas = res.docs.map(doc=>{
                        const data = doc.data()
                        return {id:doc.id, ...data}
                    })
                    setZapatillas(nuevasZapatillas)
                })
                .catch(error=>console.error(error))
    }, [idCategoria]);



    let image = "";
    let marca = "";

    switch (idCategoria) {
        case "AD":
            image = Adidas;
            marca = "Adidas";
            break;
        case "NK":
            image = Nike;
            marca = "Nike";
            break;
        case "RB":
            image = Reebok;
            marca = "Reebok";
            break;
        case "TOP":
            image = Topper;
            marca = "Topper";
            break;
        default:
            image = "";
    }

    return (
        <div className="catalogo">
            <img
                className="marca"
                src={image}
                alt={marca}
            />
            <ItemList zapatillas={zapatillas} />
        </div>
    );
};

export default ItemListContainer;
