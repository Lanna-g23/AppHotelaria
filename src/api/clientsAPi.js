export async function createRequest(nome, cpf, telefone, email, senha ){
    const dados = {nome, cpf, telefone, email, senha}
    const response = await fetch("api/cliente",{
        method: "POST",
        headers:{
            "accept": "application/json",
            "Content-Type": "application/json"

        },
        boby: JSON.stringify(dados),
        credentials:"same-origin"
    });
}