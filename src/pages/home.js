import Hero from "../components/Hero.js";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import RoomCard from "../components/RoomCard.js";
import DateSelector from "../components/DateSelector.js";
import { listAvailaRoomsRequest } from "../api/roomsAPI.js";

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

    const btnSearchRoom = dateSelector.querySelector('button');
    btnSearchRoom.addEventListener("click", async (e) =>{
        e.preventDefault();

        const inicio = "2025-09-15"; // estou setando só para testar pq ainda vamosv pegar valor diretamente do input
        const fim = "2025-09-24";
        const qtd = 2;

        try{
            const quartos = listAvailaRoomsRequest({inicio, fim, qtd});
            
        }catch(error){
            console.log(error);
        }
    });

    const cardsGroup = document.createElement('div');
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