/* getToken() é uma função que retorna o valor do token armazenado no localStorage(), para que o usuario permaneça logado mesmo que mude 
de pagina e nao tenha "re-logar" */

//import { getToken } from "./AuthAPI.js";

// Listar todos os quartos independente de filtro 

export async function addRoom(contentForm) {
    const formData = new FormData(contentForm);
    const typeAccept = ['image/jpeg', 'image/png'];
    const inFotos = contentForm.querySelector('#formFileMultiple');
    
    const imag = inFotos.files;
    for(let i = 0; i < imag.length; i++){
        if(!typeAccept.includes(imag[i].type)){
            throw new Error(`Arquivo "${imag[i].name}" não é suportado.
                Selecione um arquivo JPG ou PNG`);
        }
    }
    const url = `api/rooms`;
    const response = await fetch(url,{
        method: "POST",
        body: formData
    });
    if(!response.ok){
        throw new Error(`Erro ao enviar requisição: ${response.status}`);
    }
    const result = await response.json();
    return result;
}

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
            "Content-Type": "application/json"
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

    const quartos = Array.isArray(data?.Quartos) ? data.Quartos : [];
    console.log(quartos);
    return quartos;
}
export async function creatQuartos(nome, numero, qtd_cama_casal, qtd_cama_solteiro, preco){
    const dados = {nome, numero, qtd_cama_casal, qtd_cama_solteiro, preco};

    const response = await fetch("api/quartos", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados),
        credentials: "same-origin"
    });

    let data = null;
    try{
        data = await response.json();
    }catch{
        data = null;
    }
    return{ 
        ok:true,
        raw:data
    };
}