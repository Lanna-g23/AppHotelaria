import barraCategoria from "../components/quartosInformacoes.js";
import Navbar from "../components/Navbar.js";
import quartosInformacoes from "../components/barraCategoria.js";

export default function renderCartPage(){

    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';
    divRoot.style.gap = '8px';

    //Navbar
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';
    
    const navbar = Navbar();
    nav.appendChild(navbar);

    
    const cart = barraCategoria();
    divRoot.appendChild(cart);

    for(var i=0; i<2; i++){
        const informacoes = quartosInformacoes();
        divRoot.appendChild(informacoes);
    };

    //Footer
}
