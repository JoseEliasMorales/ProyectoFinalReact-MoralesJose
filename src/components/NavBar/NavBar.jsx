import "./NavBar.css";
import logoUrbanRoots from "./LogoUrbanRoots.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import Sesion from "../Sesion/Sesion";

const NavBar = () => {
    return (
        <header className="header">
            <div className="componentsHeader">
                <Link to="/">
                    <img
                        src={logoUrbanRoots}
                        alt="Logo urban roots"
                        className="logoHeader"
                    />
                </Link>
                <ul className="contenedorMenu">
                    <li className="itemMenu">
                        <Link
                            className="itemMenuLink"
                            to="/"
                        >
                            Home
                        </Link>
                    </li>
                    <li className="itemMenu">
                        <NavLink
                            className="itemMenuLink"
                            to={`/categoria/AD`}
                        >
                            Adidas
                        </NavLink>
                    </li>
                    <li className="itemMenu">
                        <NavLink
                            className="itemMenuLink"
                            to={`/categoria/NK`}
                        >
                            Nike
                        </NavLink>
                    </li>
                    <li className="itemMenu">
                        <NavLink
                            className="itemMenuLink"
                            to={`/categoria/RB`}
                        >
                            Reebok
                        </NavLink>
                    </li>
                    <li className="itemMenu">
                        <NavLink
                            className="itemMenuLink"
                            to={`/categoria/TOP`}
                        >
                            Topper
                        </NavLink>
                    </li>
                    <li className="itemMenu">
                        <CartWidget />
                    </li>
                </ul>
            </div>
            <div className="containerSesion">
                <Sesion />
            </div>
        </header>
    );
};

export default NavBar;
