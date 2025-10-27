import Hero from "../components/Hero.js";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import RoomCard from "../components/RoomCard.js";
import DateSelector from "../components/DateSelector.js";
import { listAvailaRoomsRequest } from "../api/roomsAPI.js";
import spinner from "../components/spinner.js";
import modal  from "../components/modal.js";
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
    const [dateCheckIn, dateCheckOut] = dateSelector.querySelectorAll('input[type="date"]');

    const dateToday = new Date().toISOString().split("T")[0];
    dateCheckIn.min = dateToday;
    dateCheckOut.min = dateToday;

    const guestAmount = dateSelector.querySelector('select');
    
    dateCheckIn.id = 'id-dateCheckin';
    dateCheckOut.id = 'id-dateCheckout';
    guestAmount.id = 'id-guestAmount';
    
    const btnSearchRoom = dateSelector.querySelector('button');

    const divCarts = document.createElement('div');
    divCarts.innerHTML = '';
    divCarts.className = "cards";
    divCarts.id = "cards-result";

    const cardsGroupInfra = document.createElement('div');
    cardsGroupInfra.className = "carts";
    const tituloInfra = document.createElement('h2');
    tituloInfra.textContent = "Conheça nosso Hotel";
    tituloInfra.style.textAlign = "center";

    const loungeItem =[
        {path: "uma-imagem-que-captura-a-atmosfera-vibrante-da-area-de-assentos-ao-ar-livre-do-restaurante_862319-1127.jpg", title: "Restaurante", text: "Nosso restaurante é um espaço " + "agradável e familiar!"},
        {path: "7-spas-incriveis-em-sao-paulo-para-relaxar-dani-noce-destaque-960x625.jpg", title: "Spa", text: "Nosso spa é ideal " + "para momento de relaxamento!"},
        {path: "MarshHouse-1.0.jpg", title: "Bar", text: "Nosso Bar é ideal" + " drinks sem metanol, confia!"},
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
        e.preventDefault();
        if(dateCheckIn.value){
            const minDateCheckout = getMinDateCheckout(dateCheckIn.value);
            dateCheckOut.min = minDateCheckout;

            if(dateCheckOut.value && dateCheckOut.value <= dateCheckIn.value){
                dateCheckOut.value = "";
                alert('A data de check-out deve ser posterior à data de check-in.');
            }
        }
    });

    btnSearchRoom.addEventListener("click", async (e) => {
        e.preventDefault();

        const inicio = (dateCheckIn?.value || "").trim();
        const fim = (dateCheckOut?.value || "").trim();
        const qtd = parseInt(guestAmount?.value || "0", 10);

        if (!inicio || !fim || Number.isNaN(qtd) || qtd <= 0){
            const mode = modal({
                    title: "Aviso!",
                    message: "Preencha todos os campos"
                });
                const Modal = document.getElementById("modalAviso");
                if (Modal) Modal.remove();

                document.body.appendChild(mode);

                // Inicializa e exibe o modal
                const bootstrapModal = new bootstrap.Modal(mode);
                bootstrapModal.show();
                return;
        }

        const dtInicio = new Date(inicio);
        const dtFim = new Date(fim);

        if (isNaN(dtInicio) || isNaN(dtFim) || dtInicio >= dtFim) {
            const mod = modal({
                title: "Data inválida",
                message: "A data de check-out deve ser posterior à data de check-in."
        });

        const Modal = document.getElementById("modalAviso");
            if (Modal) Modal.remove();

            document.body.appendChild(mod);

            // Inicializa e exibe o modal
            const bootstrapModal = new bootstrap.Modal(mod);
            bootstrapModal.show();

            return;
        }

        divCarts.innerHTML = "";
        const sp = spinner();
        divCarts.appendChild(sp);

        try{
            const room2 = await listAvailaRoomsRequest({inicio, fim, qtd});
            sp.remove();
            if(!room2.length){
            const mod = modal({
                    title: "Aviso!",
                    message: "Nenhum quarto disponivel para esse periodo"
                });

                const mods = document.getElementById("modalAviso");
                if(mods) mods.remove();
                document.body.appendChild(mods);

                const bootstrapModal = new bootstrap.Modal(mods);
                bootstrapModal.show();
                return;
            }

        divCarts.innerHTML ='';
        room2.forEach((itemCard, i) => {
            divCarts.appendChild(RoomCard(itemCard, i));
        })
    }catch(erro){
        console.log(erro);
        sp.remove();
    }
});


    //for(var i = 0; i < 3; i++){
        //const card = RoomCard(i);
       // cardsGroup.appendChild(card);
   //}
    
    divRoot.appendChild(divCarts);
    divRoot.appendChild(tituloInfra);
    divRoot.appendChild(cardsGroupInfra);

    //Footer

    const fot = document.getElementById('footer');
    fot.innerHTML = '';
    
    const footer = Footer();
    fot.appendChild(footer);
}