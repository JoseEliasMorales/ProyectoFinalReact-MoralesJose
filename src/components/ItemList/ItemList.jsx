import Item from "../Item/Item"
import './ItemList.css'
const ItemList = ({items}) => {
    return (
        <div className="contenedorZapatillas">
            {
                items.map(item=>{
                    return <Item key={item.id} {...items}/>
                })
            }
        </div>
    )
}

export default ItemList