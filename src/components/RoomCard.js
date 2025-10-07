export default function RoomCard(itemCard, index = 0) {
  const{
    nome,
    numero,
    qtd_cama_solteiro,
    qtd_cama_casal,
    preco
  } = itemCard || {};

  const title = nome;
  const camas = [
    (qtd_cama_solteiro != null ? `${qtd_cama_solteiro} cama(s) de solteiro`: null),
    (qtd_cama_casal != null ? `${qtd_cama_casal} cama(s) de casal`: null), 
].filter(Boolean).join (' - ');
  
  const containerCard = document.createElement('div'); 
  containerCard.className = "cardContainer";
  containerCard.innerHTML = 
  `
<div class="card" style="width: 18rem;">
    <div id="carouselExampleIndicators-${index}" class="carousel slide">
     
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators-${index}" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators-${index}" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators-${index}" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
 
      <div class="carousel-inner shadow">
        <div class="carousel-item active">
          <img class="d-block w-100" src="public/assets/img/Blue-Star-Hotel-All-Inclusive--Resim-31.jpg" alt="hotel">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="public/assets/img/luxury-hotel-the-peninsula-paris-exterior-night-1920.jpg" alt="entrada">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="public/assets/img/Screen-Shot-2018-02-11-at-11.webp" alt="quarto">
        </div>
      </div>
 
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators-${index}" data-bs-slide="prev">
        <span class="visually-hidden carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
 
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators-${index}" data-bs-slide="next">
        <span class="visually-hidden carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
 
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <ul class=list-unstyled md-2">
      ${camas? `<li>${camas}` : ""}
      ${preco != null ? `<li>Preco: R$ ${Number(preco).toFixed(2)}</li>` : ""}
      </ul>
      <a href="#" class="btn btn-primary">Reserva</a>
    </div>
  </div>
    `;
    return containerCard;

}
