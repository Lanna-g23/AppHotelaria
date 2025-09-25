<<<<<<< HEAD
=======
<<<<<<< HEAD
import renderCartPage from "./pages/cart.js";
=======
>>>>>>> 621906bcdeb47591c987f029762fd38643463df6
>>>>>>> 27e06b41d1d2d52b11bd88228369c26bf1bc5d5b
import renderHomePage from "./pages/home.js";
import renderLoginPage from "./pages/login.js";
import renderRegisterPage from "./pages/registra.js";
import renderCartPage from "./pages/cart.js";

//configuração de rotas mapeadas
const routes = {
    "/login": renderLoginPage,
    "/register": renderRegisterPage,
<<<<<<< HEAD
    "/home": renderHomePage,
    "/carrinho": renderCartPage
=======
<<<<<<< HEAD
    "/home": renderHomePage,
    "/mincart": renderCartPage
=======
    "/home": renderHomePage
>>>>>>> 621906bcdeb47591c987f029762fd38643463df6
>>>>>>> 27e06b41d1d2d52b11bd88228369c26bf1bc5d5b
    //Novas páginas aqui adicionadas conforme desenvolvidas
};

//obtém o caminho atual a partir do hash de URL
function getPath(){
    //obtém o hash (ex. "#/login"), remove o # e tira espaços
<<<<<<< HEAD
    //const url = (location.pathname || "").replace("/appHotelaria/", "/").trim();
    //console.log(url);
    //retorna url se começar com "/", se não, retorna "/home" como padrão 
    //return url && url.startsWith("/") ? url : "/home";


    const patParts = location.pathname.split('/').filter(Boolean);
    patParts.shift();

    const path = '/' + patParts.join('/');
    return path;
=======
    const url = (location.pathname || "").replace("/appHotelaria/", "/").trim();
    console.log(url);
    //retorna url se começar com "/", se não, retorna "/home" como padrão 
    return url && url.startsWith("/") ? url : "/home";
>>>>>>> 27e06b41d1d2d52b11bd88228369c26bf1bc5d5b
}

//Decide o que renderizar com base na rota atual
function renderRoutes(){
<<<<<<< HEAD

=======
>>>>>>> 27e06b41d1d2d52b11bd88228369c26bf1bc5d5b
    const url = getPath(); //lé a rota atual, ex. "/login"
    const render = routes[url] || routes["/home"]; //Busca esta ruta no mapa
    render(); //Executa a funçao de render na página atual 
}

//renderização
document.addEventListener('DOMContentLoaded', renderRoutes);
