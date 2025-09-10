export async function loginRequest(email, senha) {
    const  dados = {email, password: senha};
    const response = await fetch("api/login", {
        method: "POST",
        headers:{
            "accept": "application/json",
            "Content-Type": "application/json"

        },
        body: JSON.stringify(dados),

        /* URL da requisição é a mesma da origem do front (mosmo protocolo http/
        mesmo domínio - local/mesma porta 80 do servidor web apache)
        Front: http://localhost/appHotelaria/public/index.html
        Back: http://localhost/appHotelaria/api/login.php */
        credentials: "same-origin"
    });
    console.log('response:', response);

    //Interpreta a resposta como JSON
    let data = null;
    try{
        data = await response.json();
    }
    catch{
        // Se Não for JSON válido, data permanece null
        data = null;
    }
    return{
        ok: true,
        user: data.user ?? null,
        raw: data
    };
    
}
/* Função para salvar a chave token após autenticação confirmada, ao salvar
    no local storage, o usuario poderá mudar de pagina, fechar o site
    e ainda assim permanecer logado, DESDE QUE NAO TENHA EXPIRADO (1 HORA)*/
    export function saveToken(token){
        localStorage.setItem("auth_token", token);
        
    }