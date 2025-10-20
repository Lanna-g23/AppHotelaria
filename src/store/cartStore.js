/*
Requisito: usúario loga > filtra quartos em um intervalo
de tempo (data de check-in ate check-out) > clica em 
quarto para reservá-lo > abre um pedido > quarto que clicou para
reservar passa a fazer parte desse pedido > usuário segue navegando >
pode fazer mais reservas no mesmo pedido > finaliza o pedido

Pedido armazenado como rascunho no localStorage: setItem() para obter dados, getItem() para adicionar ou atualizar, removeItem() para
excluir

Estrutura JSON para exemplo de um item no carrinho:
{
    roomId: 101,
    title: "Suíte Deluxe",
    price: 250.00,
    checkIn: "2025-10-20",
    checkOut: "2025-10-25",
    daily: 5,
    subtotal: 1250.00
}
    Estrutura JSON para exemplo de um pedido:
{
    status: "draft",
    items:
    [
        {
            roomId: 101,
            title: "Suíte Deluxe",
            price: 250.00, 
            checkIn: "2025-10-20",
            checkOut: "2025-10-25",
            daily: 5,
            subtotal: 1250.00
        },
            {
            roomId: 102,
            title: "Suíte Família",
            price: 300.00, 
            checkIn: "2025-10-20",
            checkOut: "2025-10-25",
            daily: 5,
            subtotal: 1500.00
        },
    ]
}
*/ 

const key = "hotel_cart";
export function setCart(cart){
    localStorage.setItem(key, JSON.stringify(cart));
}

export function getCart(){
    try{
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : {status: "draft", items: []}
    }catch{
        return {status: "draft", items:[]};

    }
}

export function addItemToHotel_Cart(item){
    const cart = getCart();
    cart.items.push(item);
    setCart(cart);
    return cart;
}

export function removeItemFromHotel_Cart(i){
    const hotel_cart = getCart();
    hotel_cart.items.splice(i, 1);
    setCart(hotel_cart);
    return hotel_cart;
}

export function clearHotel_Cart(){
    setCart({
        status: "draft",
        items: []
    });
}

export function getTotalItems(){
    const { items } = getCart();
    const total = items.reduce((acc, it) =>
        acc + Number(it.subtotal || 0), 0
    );
    return{
        total,
        qtde_items: items.lenght
    };
}

