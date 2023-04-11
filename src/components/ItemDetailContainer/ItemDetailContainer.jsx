import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import { getUnaZapatilla } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail"
const ItemDetailContainer = () => {
    const [zapatilla, setZapatilla]=useState(null)

    const {idZapatilla}=useParams()

    useEffect(()=>{
        getUnaZapatilla(idZapatilla)
            .then(response => setZapatilla(response))
            .then(res =>console.log(res))
            .catch(error=>console.error(error))
    },[idZapatilla])



    return (
        <div>
            <ItemDetail {...zapatilla}/>
        </div>
    )
}

export default ItemDetailContainer