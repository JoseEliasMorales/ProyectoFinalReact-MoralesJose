import { Link } from 'react-router-dom'
import './Sesion.css'


const Sesion = () => {


        
    

return (
    <Link className='contenedorIniciarCrearSesion' to='/sesion'>
        <button className='iniciar'>Iniciar Sesion</button>
        <p className='o'>ó</p>
        <button className='crear'>Registrarse</button>
    </Link>
)
}

export default Sesion