function calculoDiaria(checkIn, checkOut){
/*  const checkIn = "2026-01-01";
  const checkOut = "2026-01-08";*/

  const [yin, min, din] = String(checkIn).split("-").map(Number);
  const [yout, mout, dout] = String(checkOut).split("-").map(Number);

  //console.log("Check-in formatado: " + yin + min + din +
  //  "\n Check-Out formatado: " + yout + mout + dout);

  const tzin = Date.UTC(yin, min -1, din);
  const tzout = Date.UTC(yout, mout -1, dout);

  console.log( "Milissegundos desde 2026-01-01 00:00:00: " + tzin);

  return Math.floor((tzout - tzin) / (1000 * 60 * 60 * 24));

}


export default function RoomCard(itemCard, index = 0) {
  const{id, nome, numero, qtd_cama_solteiro, qtd_cama_casal, preco} = itemCard || {};
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
            <img class="d-block w-100" src="public/assets/img/Blue-Star-Hotel-All-Inclusive--Resim-31.jpg" alt="First slide">
          </div>

          <div class="carousel-item">
            <img class="d-block w-100" src="public/assets/img/luxury-hotel-the-peninsula-paris-exterior-night-1920.jpg" alt="Second slide">
          </div>

          <div class="carousel-item">
            <img class="d-block w-100" src="public/assets/img/Screen-Shot-2018-02-11-at-11.webp" alt="Third slide">
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
            ${camas? `<li>${camas}` : ""}
            ${preco != null ? `<li>Preço diária: R$ ${Number(preco).toFixed(2)}</li>` : ""}
        </ul>

        <a href="#" class="btn btn-primary btn-reservar">Reservar</a>
      </div>
</div>
`;
containerCards.querySelector(".btn-reservar").addEventListener('click', (e) =>{
  e.preventDefault();

  const idDateCheckin = document.getElementById("id-dateCheckIn");
  const idDateCheckout = document.getElementById("id-dateCheckOut");
  const idGuestAmount = document.getElementById("id-guestAmount");

  const inicio = (idDateCheckin?.value || "");
  const fim = (idDateCheckout?.value || "");
  const qtd = parseInt|(idGuestAmount?.value || "0", 10);
});

console.log(calculoDiaria());

return containerCards;

}
