import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CarritoProvider } from "./context/CarritoContext";
import Cart from "./components/Cart/Cart";
import Usuario from "./components/Usuario/Usuario";
import Checkout from "./components/Checkout/Checkout";
import { UsuarioProvider } from "./context/UsuarioContext";


function App() {

    return (
        <>
            <BrowserRouter>
                <UsuarioProvider>
                    <CarritoProvider>
                        <NavBar />
                        <Routes>
                            <Route
                                path="/"
                                element={<ItemListContainer />}
                            />
                            <Route
                                path="/categoria/:idCategoria"
                                element={<ItemListContainer />}
                            />
                            <Route
                                path="/item/:idZapatilla"
                                element={<ItemDetailContainer />}
                            />
                            <Route path='/cart' element={<Cart />} />
                            <Route path='/sesion' element={<Usuario />}/>
                            <Route path="/checkout" element={<Checkout />}/>
                        </Routes>
                    </CarritoProvider>
                </UsuarioProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
