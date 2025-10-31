import Categoria from "../components/Categoria.js";
import Navbar from "../components/Navbar.js";
import Informacoes from "../components/RoomsInfo.js";
import buttonReservar from "../components/ButtonReservar.js"
import { finishedOrder } from "../api/orderAPI.js";
import { clearHotel_Cart } from "../store/cartStore.js";

export default function renderCartPage(){

    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';
    divRoot.style.gap = '8px';

    //Navbar
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';
    const navbar = Navbar();
    nav.appendChild(navbar);

    const categoria = Categoria();
    divRoot.appendChild(categoria);

    for(var i = 0; i < 1; i++){
        const infor = Informacoes();
        divRoot.appendChild(infor);
    };

    const butReservar = buttonReservar();
    divRoot.appendChild(butReservar);


    const reservations = getCart();
    console.log(reservations);

    const total = getTotalItems();
    console.log(total);

    const container = document.createElement('div');
    container.className = "container my-4";
    
    const header = document.createElement('div');
    header.className = "d-flex align-items-center justify-content-center mb-3";

    header.innerHTML = `
    
    <h3 class="mb-0">Reservas</h3>
    <div>
        <button id="btnClear" class"btn btn-outline-danger btn-sm">Limpar carrinho</button>
    </div>
    `
    const table = document.createElement('div');
    if(reservations.length === 0){
        table.innerHTML = `<div class="alert alert-info">Nenhuma reserva no carrinho.</div>`
    }else{
        table.innerHTML = `
        
        <div class="table-responsive">
            <table class="table table-striped table-hover align-middle">
                <thead class"table-success">
                    <!-- Colubas da tabelas -->
                    <tr>
                        <tr>Nome do quarto</tr>
                        <tr>Data de check-in</tr>
                        <tr>Data de check-out</tr>
                        <tr>Subtotal</tr>
                    </tr>
                </thead>
                <tbody>
                ${reservations.map(item => 
                    `
                    <tr>
                        <td>${item.nome}</td>
                        <td>${item.checkIn}</td>
                        <td>${item.checkOut}</td>
                        <td>R$ ${item.subtotal}</td>
                    </tr>
                    `).join("")}
            </tbody>
            <tfoot>
                    <tr>
                        <th><th>
                            <h3 style="font-size: 19px;">Total: R$ ${total}</h3>
                            </th>
                            <th>
                            <button id="btnFinalizar" class"btn btn-outline-danger btn-sm">
                            Finalizar compra</button>
                            </th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        `
    }
    container.appendChild(header);
    container.appendChild(table);
    container.appendChild(container);
    
    const btnClear = document.getElementById("btnClear");
        if(btnClear) {
            btnClear.addEventListener("click", () => {
                clearHotel_Cart();
                renderCartPage();
            });
        }
    
        const btnFinalizar = document.getElementById("btnFinalizar");
        if (btnFinalizar){
            btnFinalizar.addEventListener("click", async () =>{
                const metodoPagamento = "pix" //por enquanto! Assim que testado, colocamos um modal
                try{
                    const result = await finishedOrder(metodoPagamento, reservations);
                    if(result.ok){
                        //modal de compra efetuado com sucesso!
                        alert("compra efetuada com sucesso!");
                        clearHotel_Cart();
                        renderCartPage();
                    } else {
                        alert(result.message || "Erro ao realizar reserva.");
                    }
                }catch(error){
                    alert(error?.message || "falha na comunicação com o servidor");
                }
            });
        }

    //Footer
}
