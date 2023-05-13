import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

//Funcion para formatear en pesos

export const formatearPeso = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
});

//funcion Toast

export const MySwal=withReactContent(Swal)

export const Toast = MySwal.mixin({
    toast: true,
    position:'top-end',
    showConfirmButton:false,
    timer:3000,
    timerProgressBar:true
})