import Hero from "../components/Hero.js";
import Navbar from "../components/Navbar.js";
import RoomCard from "../components/RoomCard.js";
import DateSelector from "../components/DateSelecto.js";


export default function renderHomePage(){

    //Navbar
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';

    const navbar = Navbar();
    nav.appendChild(navbar);

   //Root (corpo da págine)
    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';
   // divRoot.style.backgroundColor = "red";

    const hero = Hero();
    divRoot.appendChild(hero);

    const dateSelector = DateSelector();
    divRoot.appendChild(dateSelector);

    const divCard = document.createElement('div');
    divCard.className = "cards"

    for(var i = 0; i < 2; i++){
        const cards = RoomCard(i);
        divCard.appendChild(cards);
    }

divRoot.appendChild(divCard);

    //Footer

    // const fot = document.getElementById('footer');
    // fot.innerHTML = '';

    // const footer = footer();
    // fot.appendChild(footer);

}