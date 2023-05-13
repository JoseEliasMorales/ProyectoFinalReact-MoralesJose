import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ zapatillas }) => {
    return (
        <div className="contenedorZapatillas">
            {zapatillas.map((item) => {
                return (
                    <Item
                        key={item.id}
                        {...item}
                    />
                );
            })}
        </div>
    );
};

export default ItemList;
