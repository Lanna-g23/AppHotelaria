export default function RoomCard(index) {
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
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
      <a href="#" class="btn btn-primary">Reserva</a>
    </div>
  </div>
    `;
    return containerCard;

}
