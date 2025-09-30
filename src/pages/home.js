import Hero from "../components/Hero.js";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import RoomCard from "../components/RoomCard.js";
import DateSelector from "../components/DateSelector.js";

export default function renderHomePage(){

    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';

    //Navbar
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';

    const navbar = Navbar();
    nav.appendChild(navbar);

    const hero = Hero();
    divRoot.appendChild(hero);

    const dateSelector = DateSelector();
    divRoot.appendChild(dateSelector);

    const cardsGroup = document.createElement('div');
    cardsGroup.innerHTML = '';
    cardsGroup.className = "cards"

    for(var i = 0; i < 3; i++){
        const card = RoomCard(i);
        cardsGroup.appendChild(card);
    }
    
    divRoot.appendChild(cardsGroup);

    //Footer

    const fot = document.getElementById('footer');
    fot.innerHTML = '';
    
    const footer = Footer();
    fot.appendChild(footer);


}