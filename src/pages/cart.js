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