import Hero from "../components/Hero.js";
import Navbar from "../components/Navbar.js";
import RoomCard from "../components/RoomCard.js";


export default function renderHomePage(){

    //Navbar
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';

    //Root (corpo da págine)
    const navbar = Navbar();
    nav.appendChild(navbar);

    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';
   // divRoot.style.backgroundColor = "red";
    
    const hero = Hero();
    divRoot.appendChild(hero);

    const divCard = document.createElement('div');
    divCard.className = "cards"

for(var i = 0; i < 2; i++){
    const cards = RoomCard();
    divCard.appendChild(cards);
}

divRoot.appendChild(divCard);

    //Footer

     const fot = document.getElementById('footer');
    fot.innerHTML = '';

    const footer = footer();
    fot.appendChild(footer);

}