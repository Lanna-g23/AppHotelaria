import renderLoginPage from "./pages/login.js";
import renderRegisterPage from "./pages/registra.js";

//configuração de rotas mapeadas
const routes = {
    "/login": renderLoginPage,
    "/register": renderRegisterPage
    //Novas páginas aqui adicionadas conforme desenvolvidas
};

//obtém o caminho atual a partir do hash de URL
function getPath(){
    //obtém o hash (ex. "#/login"), remove o # e tira espaços
    const url = (location.hash || "").replace(/^#/, "").trim();
    //retorna url se começar com "/", se não, retorna "/login" como padrão 
    return url && url.startsWith("/") ? url : "/login";
}
    //Decide o que renderizar com base na rota atual
    function renderRoutes(){
        const url = getPath(); //lé a rota atual, ex. "/register"
        const render = routes[url] || routes["/login"]; //Busca esta ruta no mapa
        render(); //Executa a funçao de render na página atual 
}

window.addEventListener("hashchange", renderRoutes);
//renderização
document.addEventListener('DOMContentLoaded', renderRoutes);

