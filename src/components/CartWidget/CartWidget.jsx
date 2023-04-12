import "./CartWidget.css";
import "./cart-outline.svg";
const CarritoDeCompras = () => {
    return (
        <div className="carritoDeCompras">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon"
                viewBox="0 0 512 512"
            >
                <circle
                    cx="176"
                    cy="416"
                    r="16"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                />
                <circle
                    cx="400"
                    cy="416"
                    r="16"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                />
                <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                    d="M48 80h64l48 272h256"
                />
                <path
                    d="M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                />
            </svg>
            <p className="count">1</p>
        </div>
    );
};

export default CarritoDeCompras;