/* getToken() é uma função que retorna o valor do token armazenado no localStorage(), para que o usuario permaneça logado mesmo que mude 
de pagina e nao tenha "re-logar" */

//import { getToken } from "./AuthAPI.js";

// Listar todos os quartos independente de filtro 
export async function listAvailaRoomsRequest({inicio, fim, qtd}){
    const params = new URLSearchParams();

    if(inicio){params.set("inicio", inicio);}
    if(fim){params.set("fim", fim);}
    if(qtd !== null && qtd !== ""){params.set("qtd", String(qtd));}

    const url = `api/rooms/disponiveis?${params.toString()}`;
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Accept": "application/json",
        },
        credentials: "same-origin",     
    });
    // Retorna o valor do token armazenado (que comprova a autenticação do usuario)
    //const token = getToken();
    /* função para listar os quartos predcisa ser assincrona, pois espera-se uma "Promise" de que ao chamar
    o endpoint api/quartos (que rxecuta o arquivo quartos.php no qual
    contem todas as requisições posiveis)
    este arquivo conversa com a Controller que, por sua vez conversa com a Model (onde está a query SELECT)
         "Content-Type": "application/json"
       },*/ 
       
    let data = null;
    try{
        data = await response.json();
    }catch{
        data = null;
    }

    if(!response.ok){
        const msg = data?.message || "Falha ao buscar quartos disponiveis!";
        throw new Error(msg);
    }

    const rooms = Array.isArray(data?.Quartos) ? data.Quartos : [];
    console.log(rooms);
    return rooms;
}