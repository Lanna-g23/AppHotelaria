import { loginRequest } from "../api/AuthAPI.js";
import Form from "../components/Form.js";
import Navbar from "../components/Navbar.js";


export default function renderLoginPage() { 
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';
    
    const navbar = Navbar();
    nav.appendChild(navbar);

    const formulario = Form();
    const contentForm = formulario.querySelector('form');

    const inputEmail = contentForm.querySelector('input[type="email"]');
    const inputSenha = contentForm.querySelector('input[type="password"]');
    const btn = contentForm.querySelector('button[type="submit"]');

    /*monitora o clique no botão para acionar um evento de submeter
    os dados do form*/
    contentForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const email = inputEmail.value.trim();
        const senha = inputSenha.value.trim();

        try{
            const result = await loginRequest(email, senha);
            console.log("login realizado com sucesso!");
            //window.location.pathname = /home;
        }catch{
        console.log("erro inesperado!");
        }        
     
    });
}

