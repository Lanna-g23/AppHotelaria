<<<<<<< HEAD
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
=======
import Navbar from "../components/Navbar";
//importar componente Footer

export default function renderCartPage(){

    //Navbar
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';
    const navbar = Navbar();
    nav.appendChild(navbar);

     const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';

    //Footer

}
>>>>>>> 27e06b41d1d2d52b11bd88228369c26bf1bc5d5b
