import renderHomePage from "./pages/home.js";
import renderLoginPage from "./pages/login.js";
import renderRegisterPage from "./pages/registra.js";
import renderCartPage from "./pages/cart.js";

//configuração de rotas mapeadas
const routes = {
    "/login": renderLoginPage,
    "/register": renderRegisterPage,
    "/home": renderHomePage,
    "/cart": renderCartPage
    //Novas páginas aqui adicionadas conforme desenvolvidas
};

//obtém o caminho atual a partir do hash de URL
function getPath(){
    //obtém o hash (ex. "#/login"), remove o # e tira espaços
    //const url = (location.pathname || "").replace("/appHotelaria/", "/").trim();
    //console.log(url);
    //retorna url se começar com "/", se não, retorna "/home" como padrão 
    //return url && url.startsWith("/") ? url : "/home";


    const pathParts = location.pathname.split('/').filter(Boolean);
    pathParts.shift();

    const path = '/' + pathParts.join('/');
    return path;
}

//Decide o que renderizar com base na rota atual
function renderRoutes(){

    const url = getPath(); //lé a rota atual, ex. "/login"
    const render = routes[url] || routes["/home"]; //Busca esta ruta no mapa
    render(); //Executa a funçao de render na página atual 
}

//renderização
document.addEventListener('DOMContentLoaded', renderRoutes);
