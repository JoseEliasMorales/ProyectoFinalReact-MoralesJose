import { useState, useEffect } from "react"
import { getZapatillas, getZapatillasPorMarca } from "../../asyncmock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
const ItemListContainer = ({greeting}) => {

    const [zapatillas, setZapatillas]=useState([])

    const {idCategoria}=useParams()

    console.log(getZapatillas());
    useEffect(()=>{
        const funcionZapatillas = idCategoria ? getZapatillasPorMarca : getZapatillas
        console.log(funcionZapatillas);
        funcionZapatillas(idCategoria)
            .then(respuesta =>setZapatillas(respuesta))
            
            .catch(error=>console.error(error))
    }, [idCategoria])

    return (
        <>
            <h2>{greeting}</h2>
            <ItemList items={zapatillas}/>

        </>
    )
}

export default ItemListContainer