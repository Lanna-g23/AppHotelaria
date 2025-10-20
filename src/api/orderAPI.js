export async function finishedOrder(items) {
    const url = "api/orders/reservation";
    const body = {
        /* Por enquanto todo pagamento será via PIX, ate termos
        um front para o usuário setar forma de pagamento*/ 

        pagamento: "pix",
        quartos: items.map(it => (
            {
                id: it.roomId,
                inicio: it.checkIn,
                fim: it.checkOut
            }
        ))
    };

    const res = await fetch(url, {
       method: "POST",
       headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
       },
       credentials: "same-origin",
       body: JSON.stringify(body)
    });

    if(!res.ok){
        const message = `Erro ao enviar pedido: ${res.status}`;
        throw new Error(message);
    }
    return res.json();
}