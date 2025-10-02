import Categoria from "../components/Categoria.js";
import Navbar from "../components/Navbar.js";
import Informacoes from "../components/RoomsInfo.js";

export default function renderCartPage(){

    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';
    divRoot.style.gap = '8px';

    //Navbar
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';
    
    const navbar = Navbar();
    nav.appendChild(navbar);

    
    const cart = Categoria();
    divRoot.appendChild(cart);

    for(var i=0; i<2; i++){
        const informacoes = Informacoes();
        divRoot.appendChild(informacoes);
    };

    //Footer
}
