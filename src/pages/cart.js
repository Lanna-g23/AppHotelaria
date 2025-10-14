import Categoria from "../components/Categoria.js";
import Navbar from "../components/Navbar.js";
import Informacoes from "../components/RoomsInfo.js";
import buttonReservar from "../components/ButtonReservar.js"

export default function renderCartPage(){

    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';
    divRoot.style.gap = '8px';

    //Navbar
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';
    
    const navbar = Navbar();
    nav.appendChild(navbar);

    const categoria = Categoria();
    divRoot.appendChild(categoria);

    for(var i = 0; i < 1; i++){
        const infor = Informacoes();
        divRoot.appendChild(infor);
    };

    const butReservar = buttonReservar();
    divRoot.appendChild(butReservar);


    //Footer
}
