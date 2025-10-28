import { addItemToHotel_Cart } from '../store/cartStore.js';
import modal from './modal.js';

function calculoDiaria(checkIn, checkOut){
/*  const checkIn = "2026-01-01";
  const checkOut = "2026-01-08";*/

  const [yin, min, din] = String(checkIn).split("-").map(Number);
  const [yout, mout, dout] = String(checkOut).split("-").map(Number);

  //console.log("Check-in formatado: " + yin + min + din +
  //  "\n Check-Out formatado: " + yout + mout + dout);

  const tzin = Date.UTC(yin, min -1, din);
  const tzout = Date.UTC(yout, mout -1, dout);

  //console.log( "Milissegundos desde 2026-01-01 00:00:00: " + tzin);
  return Math.floor((tzout - tzin) / (1000 * 60 * 60 * 24) );

}


export default function RoomCard(itemCard, index = 0) {
  const{ id, nome, numero, qtd_cama_casal, qtd_cama_solteiro, preco } = itemCard || {};
  const title = nome;

  const camas = [
    (qtd_cama_casal != null ? `${qtd_cama_casal} cama(s) de casal` : null), 
    (qtd_cama_solteiro != null ? `${qtd_cama_solteiro} cama(s) de solteiro` : null),
].filter(Boolean).join(' - ');
  
const containerCards = document.createElement('div'); 
containerCards.className = "cardContainer";
containerCards.innerHTML = `
  <div class="card" style="width: 18rem;">
      <div id="carouselExampleIndicators-${index}" class="carousel slide">
     
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators-${index}" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators-${index}" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators-${index}" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
 
        <div class="carousel-inner shadow">

          <div class="carousel-item active">
            <img class="d-block w-100" src="public/assets/img/img3.jpg" alt="First slide">
          </div>

          <div class="carousel-item">
            <img class="d-block w-100" src="public/assets/img/img2.jpg" alt="Second slide">
          </div>

          <div class="carousel-item">
            <img class="d-block w-100" src="public/assets/img/img.webp" alt="Third slide">
          </div>

      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators-${index}" data-bs-slide="prev">
        <span class="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
 
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators-${index}" data-bs-slide="next">
        <span class="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
  </div>
 
    <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <ul class=list-unstyled md-2">
            ${camas? `<li>${camas}</li>` : ""}
            ${preco != null ? `<li>Preço diária: R$ ${Number(preco).toFixed(2)}</li>` : ""}
        </ul>

        <a href="#" class="btn btn-primary btn-reservar">Reservar</a>
      </div>
</div>
`;
containerCards.querySelector(".btn-reservar").addEventListener('click', (e) => {
  e.preventDefault();

  const idDateCheckin = document.getElementById('id-dateCheckIn');
  const idDateCheckout = document.getElementById('id-dateCheckOut');
  const idGuestAmount = document.getElementById('id-guestAmount');

  const inicio = (idDateCheckin?.value || "").trim();
  const fim = (idDateCheckout?.value || "").trim();
  const qtd = parseInt(idGuestAmount?.value || "0", 10);


  if(!inicio || !fim || Number.isNaN(qtd) || qtd <= 0 ){
    const mod2 = modal({
        title: "Preencha todos os campos",
        message: "Por favor, preencha as datas e a quantidade de hóspedes."
    });

    const exist = document.getElementById('modalAviso');
    if(exist) exist.remove();

    document.body.appendChild(mod2);

  
    const bootstrapModal = new bootstrap.Modal(mod2);
    bootstrapModal.show();
    return;
  }

  const daily = calculoDiaria(inicio, fim);
  const subtutal = parseFloat(preco) * daily;
  const novoItemReserva ={
    id,
    nome,
    checkIn: inicio,
    checkOut: fim,
    guests: qtd,
    daily,
    subtutal
  }
  addItemToHotel_Cart(novoItemReserva);

    const mod = modal({
        title: "Reserva realizada.",
        message: `Nome do quarto: 
        ${nome}<br>Diárias: ${daily}<br>Subtotal: R$ ${subtutal.toFixed(2)}`
  });

  const modalExiste = document.getElementById("modalAviso");
    if(modalExiste) modalExiste.remove();
    document.body.appendChild(mod);
    new bootstrap.Modal(mod).show();
    return;

  });
  
  return containerCards;

}
