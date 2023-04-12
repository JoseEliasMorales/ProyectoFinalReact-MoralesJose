import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { getZapatillas, getZapatillasPorMarca } from "../../asyncmock";
import './ItemListContainer.css'
import ItemList from "../ItemList/ItemList";
import Adidas from './adidas.png'
import Nike from './nike.png'
import Reebok from './reebok.png'
import Topper from './topper.png'

const ItemListContainer = () => {
    
    const [zapatillas, setZapatillas]=useState([])
    
    const {idCategoria}=useParams()

    useEffect(()=>{
        const funcionZapatillas = idCategoria ? getZapatillasPorMarca : getZapatillas      
        
        funcionZapatillas(idCategoria)
            .then(respuesta =>setZapatillas(respuesta))
            .catch(error=>console.error(error))
    }, [idCategoria])

    let image =""
    let marca=""

    switch(idCategoria){
        case "AD": 
                image= Adidas 
                marca="Adidas"
            break
        case "NK": 
                image=Nike
                marca="Nike"
            break
        case "RB": 
                image= Reebok
                marca="Reebok"
            break
        case "TOP": 
                image=Topper
                marca="Topper"
            break
        default: image=""
    }
    
    return (
        <div className="catalogo">
            <img className="marca" src={image} alt={marca} />
            <ItemList zapatillas={zapatillas}/>
        </div>
    )
}

export default ItemListContainer