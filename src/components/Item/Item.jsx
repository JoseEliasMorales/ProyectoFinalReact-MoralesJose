import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id,nombre,precio,img}) => {
    return (
        <div className='item' key={id}>
            <img className='imageItem' src={img} alt={nombre}/>
            <p className='itemTitle'>{nombre}</p>
            <p className='precio'>{precio}</p>
            <Link to={`/item/${id}`}>Ver Detalles</Link>
        </div>
    )
}

export default Item