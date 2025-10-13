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

    /*Criar constante que armazene o valor da data de hoje*/

    const dateToday = new Date().toISOString().split("T")[0];
    const [dateCheckIn, dateCheckOut] = dateSelector.querySelectorAll('input[type="date]');
    dateCheckIn.min = dateToday;
    dateCheckOut.min = dateToday;

    const guestAmount = dateSelector.querySelector('select');
    const btnSearchRoom = dateSelector.querySelector('button');

    const cardsGroup = document.createElement('div');
    cardsGroup.className = "cards";
    cardsGroup.id = "cards-result";

    const cardsGroupInfra = document.createElement('div');
    cardsGroupInfra.className = "cards";

    const tituloInfra = document.createElement('h2');
    tituloInfra.textContent = "Conheça nosso Hotel";
    tituloInfra.style.textAlign = "center";

    const loungeItem =[
        {path: "uma-imagem-que-captura-a-atmosfera-vibrante-da-area-de-assentos-ao-ar-livre-do-restaurante_862319-1127.jpg",
        title: "Restaurante", text: "Nosso restaurante é um espaço " +
        "agradável e familiar!"},

            {path: "7-spas-incriveis-em-sao-paulo-para-relaxar-dani-noce-destaque-960x625.jpg", title: "Spa", text: "Nosso spa é ideal " +
            "para momento de relaxamento!"},

            {path: "MarshHouse-1.0.jpg", title: "Bar", text: "Nosso Bar é ideal" +
            " drinks sem metanol, confia!"}
    ];

    for(let i = 0; i < loungeItem.length; i++){
        const cardLounge = CardLounge(loungeItem[i], i);
        cardsGroupInfra.appendChild(cardLounge);
    }

    function getMinDateCheckout(dateCheckIn){
        const minDaily = new Date (dateCheckIn);
        minDaily.setDate(minDaily.getDate() + 1);
        return minDaily.toISOString().split('T')[0];
    }
    dateCheckIn.addEventListener('change', async (e) => {
        


    });



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
            const result = await listAvailaRoomsRequest({inicio, fim, qtd});
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
    divRoot.appendChild(tituloInfra);
    divRoot.appendChild(cardsGroupInfra);

    //Footer

    const fot = document.getElementById('footer');
    fot.innerHTML = '';
    
    const footer = Footer();
    fot.appendChild(footer);


}