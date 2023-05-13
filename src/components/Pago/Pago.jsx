import { useContext, useEffect, useState } from "react";
import { UsuarioContext } from "../../context/UsuarioContext";
import { CarritoContext } from "../../context/CarritoContext";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from "../../services/firebase/config";
import Cards from "react-credit-cards-2";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import './Pago.css'


const Pago = () => {

    const { usuario } = useContext(UsuarioContext);
    const { carrito, vaciarCarrito } = useContext(CarritoContext)
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [numeroTarjeta, setNumeroTarjeta] = useState("");
    const [nombreTarjeta, setNombreTarjeta] = useState("");
    const [ccv, setCcv] = useState("");
    const [fecha, setFecha] = useState("");
    const [ordenId, setOrdenId]=useState("")

    console.log(ordenId);
    const MySwal = withReactContent(Swal)

    

    

    

    const handlerControlStock = (id, stock) => {
        if (stock > 0) {
            const zapatillaRef = doc(db, "zapatillas", id)
            const stockCarrito = carrito.find(zapatilla=>zapatilla.item.id===id)
            updateDoc(zapatillaRef, {
                stock: stock - stockCarrito.cantidad
            })
                .then(() => {
                    console.log("Producto actualizado");
                })
                .catch(error => {
                    console.error(error);
                })
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (email !== emailConfirmacion) {
            setError("Los campos no coinciden");
            return;
        }

        const orden = {
            items: carrito.map((prod) => ({
                id: prod.item.id,
                nombre: prod.item.nombre,
                cantidad: prod.cantidad,
            })),
            total: carrito.reduce(
                (total, producto) =>
                    total + producto.item.precio * producto.cantidad,
                0
            ),
            nombre,
            apellido,
            telefono,
            email,
        };

        addDoc(collection(db,"ordenes"),orden)
            .then((docRef)=>{
                setOrdenId(docRef.id);
                MySwal.fire({
                    icon: "success",
                    title: "Orden Completada",
                    text: `Tu codigo de orden es: ${docRef.id}`
                })
            })
            
            .then(()=>{
                vaciarCarrito()
            })
            .catch(()=>{
                setError(
                    "Se produjo un error al crear la orden. Por favor, intentelo de nuevo"
                )
            })
    }

    return (
        <div className="datosFormulario">
            {usuario === null ? (
                <div className="iniciarSesionPedido">
                    <p>Por favor, para completar el pedido</p>{" "}
                    <Link
                        to="/sesion"
                        className="btnIniciarSesion btnIniciarSesion--checkout"
                    >
                        Inicia Sesion
                    </Link>
                </div>
            ) : (
                <div className="formularioYPago">
                    <form onSubmit={handleSubmit} className="contenedorFormulario">
                        <div>
                            <h4>Datos para la compra</h4>
                            <div className="usuario">
                                <input
                                    type="text"
                                    value={nombre}
                                    onChange={(e) =>
                                        setNombre(e.target.value)
                                    }
                                    id="nombre"
                                    className="inputForm"
                                    required
                                />
                                <label htmlFor="nombre">Nombre</label>
                            </div>
                            <div className="usuario">
                                <input
                                    type="text"
                                    value={apellido}
                                    onChange={(e) =>
                                        setApellido(e.target.value)
                                    }
                                    id="apellido"
                                    className="inputForm"
                                    required
                                />
                                <label htmlFor="apellido">
                                    Apellido:
                                </label>
                            </div>
                            <div className="usuario">
                                <input
                                    type="text"
                                    value={telefono}
                                    onChange={(e) =>
                                        setTelefono(e.target.value)
                                    }
                                    id="telefono"
                                    className="inputForm"
                                    required
                                />
                                <label htmlFor="telefono">
                                    Telefono:
                                </label>
                            </div>
                            <div className="usuario">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                    id="email"
                                    className="inputForm"
                                    required
                                />
                                <label htmlFor="email">Email:</label>
                            </div>
                            <div className="usuario">
                                <input
                                    type="email"
                                    value={emailConfirmacion}
                                    onChange={(e) =>
                                        setEmailConfirmacion(
                                            e.target.value
                                        )
                                    }
                                    id="repEmail"
                                    className="inputForm"
                                    required
                                />
                                <label htmlFor="repEmail">
                                    Repetir Email:
                                </label>
                            </div>
                            {error && (
                                <p style={{ color: "red" }}>{error}</p>
                            )}
                            {
                                carrito.map((prod)=>(
                                    <button key={prod.item.id} type="submit" className="enviarTarjeta" onClick={()=>handlerControlStock(prod.item.id, prod.item.stock)}>Pagar</button>
                                ))
                                
                            }
                        </div>
                        <div className="datosFormulario datosFormulario--card">
                            <legend className="titlePago">
                                Datos de Pago
                            </legend>
                            <div className="usuario">
                                <input
                                    type="text"
                                    id="nombreTarjeta"
                                    onKeyUp={(e) =>
                                        setNombreTarjeta(e.target.value)
                                    }
                                    className="inputForm inputForm--card"
                                    maxLength={19}
                                    autoComplete="off"
                                    required
                                />
                                <label
                                    htmlFor="nombreTarjeta"
                                    className="nombreLabel nombreLabel--card"
                                >
                                    Nombre como aparece en la tarjeta
                                </label>
                            </div>
                            <div className="usuario">
                                <input
                                    type="text"
                                    id="numeroTarjeta"
                                    onKeyUp={(e) =>
                                        setNumeroTarjeta(e.target.value)
                                    }
                                    className="inputForm inputForm--card"
                                    minLength={16}
                                    maxLength={16}
                                    autoComplete="off"
                                    required
                                />
                                <label
                                    htmlFor="numeroTarjeta"
                                    className="nombreLabel nombreLabel--card"
                                >
                                    Numero de Tarjeta
                                </label>
                            </div>
                            <div className="fecha">
                                <div className="datosExpiracion">
                                    <label
                                        htmlFor="fecha"
                                        className="expiracion"
                                        
                                    >
                                        Expiracion
                                    </label>
                                    <input
                                        type="text"
                                        className="ccvNumero"
                                        onKeyUp={(e) =>
                                            setFecha(e.target.value)
                                        }
                                        id="fecha"
                                        maxLength={4}
                                        minLength={4}
                                        placeholder="MMAA"
                                    />
                                </div>
                                <div className="ccv">
                                    <label
                                        htmlFor="ccv"
                                        className="expiracion"
                                    >
                                        CCV
                                    </label>
                                    <input
                                        type="text"
                                        className="ccvNumero"
                                        onKeyUp={(e) =>
                                            setCcv(e.target.value)
                                        }
                                        id="ccv"
                                        maxLength={3}
                                        minLength={3}
                                    />
                                </div>
                            </div>

                            <div className="card">
                                <Cards
                                    number={numeroTarjeta}
                                    expiry={fecha}
                                    cvc={ccv}
                                    name={nombreTarjeta}
                                    focused="name"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            )}
            <Link className="volver" to='/'>Volver a la pagina principal</Link>
        </div>
    )
}


export default Pago