export default function CardLounge(){
    const cardLounge = document.createElement('div');

    cardLounge.innerHTML = `


    <div class="card" style="width: 18rem;">
        <img src="public/assets/img/uma-imagem-que-captura-a-atmosfera-vibrante-da-area-de-assentos-ao-ar-livre-do-restaurante_862319-1127.jpg" class="card-img-top" alt="...">
        <div class="btn-group dropup">
            <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" 
            aria-expanded="false" style="border:none>
                <h3 class="card-text" style="font-size: 1rem; font-family:"Arial"; font-weight: 700">Restaurante</h3>
            </button>
            <ul class="dropdown-menu">
                <p class= "card-text"> Nosso restaurante é um espaço confortavel e alegre.</p>
            </ul>
        </div>
    </div>
    `


    return cardLounge;
}