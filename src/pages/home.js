import Hero from "../components/Hero.js";
import Navbar from "../components/Navbar.js";
//import Footer from "../components/footer.js";
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
    
   // const footer = Footer();
    //fot.appendChild(footer);

}