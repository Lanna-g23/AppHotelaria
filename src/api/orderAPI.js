import { getToken } from "./AuthAPI.js";


export async function finishedOrder(metodoPagamento, reservations) {
    const url = "api/orders/reservation";
    const body = {

        /*Por enquanto, o cliente_id será no código,
        amanhã o Jeff tratará o token 
        cliente_id: 10,*/

        /* Por enquanto todo pagamento será via PIX, ate termos
        um front para o usuário setar forma de pagamento*/ 

        pagamento: metodoPagamento,
        quartos: reservations.map(it => (
            {
                id: it.id,
                inicio: it.checkIn,
                fim: it.checkOut
            }
        ))};

    const token = getToken?.();
    const res = await fetch(url, {
       method: "POST",
       headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
       },
       credentials: "same-origin",
       body: JSON.stringify(body)
    });
    let data = null;

    try{
        data = await res.json();
    }
    catch{ data = null; }
    if(!res.ok){
        const message = `Erro ao enviar pedido: ${res.status}`;
        return {ok: false, raw: data, message}; }
    return {
        ok: true,
        raw: data
    }
}