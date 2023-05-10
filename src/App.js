import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CarritoProvider } from "./context/CarritoContext";
import Cart from "./components/Cart/Cart";
import Usuario from "./components/Usuario/Usuario";
import { useState } from "react";


function App() {
    const [usuario, setUsuario]=useState(null)

    return (
        <>
            <BrowserRouter>
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
                        <Route path='/sesion' element={<Usuario setUsuario={setUsuario}/>}/>
                    </Routes>
                </CarritoProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
