<<<<<<< HEAD
export default function RoomCard(index) {
    const card = document.createElement('div'); 
=======
export default function RoomCard() {
    const card = document.createElement('div');
>>>>>>> 621906bcdeb47591c987f029762fd38643463df6
    card.className = "cardContainer";
    card.innerHTML = 
    `
<div class="card" style="width: 18rem;">
<<<<<<< HEAD
    <div id="carouselExampleIndicators${index}" class="carousel slide">
        <div class="carousel-indicators">
            <button class="visually-hidden" type="button" data-bs-target="#carouselExampleIndicators${index}" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button class="visually-hidden" type="button" data-bs-target="#carouselExampleIndicators${index}" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button class="visually-hidden" type="button" data-bs-target="#carouselExampleIndicators${index}" data-bs-slide-to="2" aria-label="Slide 3"></button>
=======
    <div id="carouselExampleCaptions-RoomCard" class="carousel slide">
        <div class="carousel-indicators">
            <button class="visually-hidden" type="button" data-bs-target="#carouselExampleCaptions-RoomCard" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button class="visually-hidden" type="button" data-bs-target="#carouselExampleCaptions-RoomCard" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button class="visually-hidden" type="button" data-bs-target="#carouselExampleCaptions-RoomCard" data-bs-slide-to="2" aria-label="Slide 3"></button>
>>>>>>> 621906bcdeb47591c987f029762fd38643463df6
        </div>

        <div class="carousel-inner shadow">

        <div class="carousel-item active">
            <img src="public/assets/img/Screen-Shot-2018-02-11-at-11.webp" class="d-block w-100" alt="...">
<<<<<<< HEAD
    
=======
            <div class="carousel-caption d-none d-md-block">
>>>>>>> 621906bcdeb47591c987f029762fd38643463df6
        </div>
    </div>
    <div class="carousel-item">
        <img src="public/assets/img/luxury-hotel-the-peninsula-paris-exterior-night-1920.jpg" class="d-block w-100" alt="...">
<<<<<<< HEAD

=======
        <div class="carousel-caption d-none d-md-block">
>>>>>>> 621906bcdeb47591c987f029762fd38643463df6
        </div>
    </div>

    <div class="carousel-item">
        <img src="public/assets/img/Blue-Star-Hotel-All-Inclusive--Resim-31.jpg" class="d-block w-100" alt="...">
<<<<<<< HEAD

        </div>
    </div>

    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators${index}" data-bs-slide="prev">
=======
        <div class="carousel-caption d-none d-md-block">
        </div>
    </div>

    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions-RoomCard" data-bs-slide="prev">
>>>>>>> 621906bcdeb47591c987f029762fd38643463df6
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>

<<<<<<< HEAD
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators${index}" data-bs-slide="next">
=======
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions-RoomCard" data-bs-slide="next">
>>>>>>> 621906bcdeb47591c987f029762fd38643463df6
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>

</div>

 
  
  <div class="card-body">
    <h5 class="card-title">Nome do quarto</h5>
    <p class="card-text">Some quick example text to build on the
    card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> 
`;
return card;
}
