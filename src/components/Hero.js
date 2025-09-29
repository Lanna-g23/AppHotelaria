export default function Hero(){
    const containerHero = document.createElement('div');
    containerHero.className = 'hero w-100 d-flex justify-content-center';
    containerHero.innerHTML = `

<div class = "hero-frame w-100">
    <div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      <div class="carousel-inner shadow">

        <div class="carousel-item active">
          <img src="public/assets/img/Screen-Shot-2018-02-11-at-11.webp" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Etiqueta do primeiro slide</h5>
            <p>Algum conteúdo de espaço reservado representativo para o primeiro slide.</p>
          </div>

        </div>

        <div class="carousel-item">
          <img src="public/assets/img/luxury-hotel-the-peninsula-paris-exterior-night-1920.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Rótulo do segundo slide</h5>
            <p>Algum conteúdo de espaço reservado representativo para o segundo slide.</p>
          </div> 
        </div>

        <div class="carousel-item">
          <img src="public/assets/img/Blue-Star-Hotel-All-Inclusive--Resim-31.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Etiqueta do terceiro slide</h5>
            <p>Algum conteúdo de espaço reservado representativo para o terceiro slide.</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button> 
    </div>
</div>`;
    return containerHero;
}  

