import { Link } from 'react-router-dom'
import './Sesion.css'
import { useContext } from 'react'
import UsuarioContext from '../../context/UsuarioContext'
import cerrar from './cerrar-sesion.png'


const Sesion = () => {

const {usuario, cerrarUsuario}=useContext(UsuarioContext)
        


return (
    <Link className='contenedorIniciarCrearSesion' to='/sesion'>
        {
            usuario===null
                ?<><button className='iniciar'>Iniciar Sesion</button><p className='o'>ó</p><button className='crear'>Registrarse</button></>
                :<><p className='nombreSesion'>{usuario.displayName}</p><button className='cerrarSesion' onClick={cerrarUsuario}><img className='imgCerrarSesion' src={cerrar} alt='cerrar sesion'/></button></>
        }
    </Link>
)
}

export default Sesion