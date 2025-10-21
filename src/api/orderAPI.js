export async function finishedOrder(items) {
    const url = "api/orders/reservation";
    const body = {

        /*Por enquanto, o cliente_id será no código,
        amanhã o Jeff tratará o token */
        cliente_id: 10,

        /* Por enquanto todo pagamento será via PIX, ate termos
        um front para o usuário setar forma de pagamento*/ 

        pagamento: "pix",
        quartos: items.map(it => (
            {
                id: it.roomId,
                inicio: it.checkIn,
                fim: it.checkOut
            }
        ))};

    const res = await fetch(url, {
       method: "POST",
       headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
       },
       credentials: "same-origin",
       body: JSON.stringify(body)
    });

    let data = null;

    try{
        data = await res.json();
    }
    catch{
        data = null;
    }

    if(!data){
        const message = `Erro ao enviar pedido: ${res.status}`;
        return {ok: false, raw: data, message}; }
    return {
        ok: true,
        raw: data
    }
}