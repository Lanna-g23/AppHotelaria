import Hero from "../components/Hero.js";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import RoomCard from "../components/RoomCard.js";
import DateSelector from "../components/DateSelector.js";
import { listAvailaRoomsRequest } from "../api/roomsAPI.js";
import CardLounge from "../components/CardLounge.js";

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

    const [dateCheckIn, dateCheckOut] = dateSelector.querySelectorAll('input[type="date]');
    const guestAmount = dateSelector.querySelector('select');
    const btnSearchRoom = dateSelector.querySelector('button');

    const cardsGroup = document.createElement('div');
    cardsGroup.className = "cards";
    cardsGroup.id = "cards-result";

    const cardLounge = CardLounge();
    cardsGroup.appendChild(cardLounge);

    btnSearchRoom.addEventListener("click", async (e) =>{
        e.preventDefault();

        const inicio = (dateCheckIn?.value || "").trim();
        const fim = (dateCheckOut?.value || "").trim();
        const qtd = parseInt(guestAmount?.value || "0", 10);

        if (!inicio || !fim || Number.isNaN(qtd)|| qtd <= 0){
            console.log("Preencha todos os campo!");
            return
        }

        const dtInicio = new Date(inicio);
        const dtFim = new Date(fim);

        if (isNaN(dtInicio) || isNaN(dtFim) || dtInicio >= dtFim) {
            console.log("A data de check-out deve ser posterior ao check-in");
            return
        }

        try{
            const result = listAvailaRoomsRequest({inicio, fim, qtd});
            
        if(!result.length){
            console.log("Nenhum quarto disponível para esse pedído")
            return;
        }
        cardsGroup.innerHTML ='';
        result.forEach((itemCard, i) => {
            cardsGroup.appendChild(RoomCard(itemCard, i));
        });

        }catch(error){
            console.log(error);
        }
        
    });


    //for(var i = 0; i < 3; i++){
        //const card = RoomCard(i);
       // cardsGroup.appendChild(card);
   //}
    
    divRoot.appendChild(cardsGroup);

    //Footer

    const fot = document.getElementById('footer');
    fot.innerHTML = '';
    
    const footer = Footer();
    fot.appendChild(footer);


}