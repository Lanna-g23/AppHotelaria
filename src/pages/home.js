import Hero from "../components/Hero.js";
import Navbar from "../components/Navbar.js";
import RoomCard from "../components/RoomCard.js";
<<<<<<< HEAD
import DateSelector from "../components/DateSelecto.js";
=======
>>>>>>> 621906bcdeb47591c987f029762fd38643463df6


export default function renderHomePage(){

    //Navbar
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';

<<<<<<< HEAD
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
=======
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
>>>>>>> 621906bcdeb47591c987f029762fd38643463df6

divRoot.appendChild(divCard);

    //Footer

<<<<<<< HEAD
    // const fot = document.getElementById('footer');
    // fot.innerHTML = '';

    // const footer = footer();
    // fot.appendChild(footer);
=======
     const fot = document.getElementById('footer');
    fot.innerHTML = '';

    const footer = footer();
    fot.appendChild(footer);
>>>>>>> 621906bcdeb47591c987f029762fd38643463df6

}