import { loginRequest, saveToken } from "../api/authAPI.js";
import Form from "../components/Form.js";
import Navbar from "../components/Navbar.js";
import Footer from "../components/footer.js";


export default function renderLoginPage() {

    const nav = document.getElementById('navbar');
    nav.innerHTML = '';

    const navbar = Navbar();
    nav.appendChild(navbar);

    
    const fot = document.getElementById('footer');
    fot.innerHTML = '';
    
    const footer = Footer();
    fot.appendChild(footer);

    const formulario = Form();
    const contentForm = formulario.querySelector('form');

    const inputEmail = contentForm.querySelector('input[type="email"]');
    const inputSenha = contentForm.querySelector('input[type="password"]');
    const btn = contentForm.querySelector('button[type="submit"]');

    /*monitora o clique no botão para acionar um evento de submeter
    os dados do form*/
    contentForm.addEventListener("submit", async (evento) => {
        evento.preventDefault();
        
        const email = inputEmail.value.trim();
        const senha = inputSenha.value.trim();

        try{
            const result = await loginRequest(email, senha);
            if (result.ok){
                console.log("login realizado com sucesso", result);
                saveToken(result.token);
                window.location.pathname = "estudo_php/home";
            }else{
                console.log('login invalido!');
            }
        }catch{
            console.log("erro inesperado!");
        }        
    });

    const cadastrar = document.createElement('div');
    cadastrar.className = 'registerContainer';

    const texto = document.createElement('span');
    texto.textContent = 'Ainda não tem uma conta?';

    const criar = document.createElement('a');
    criar.href = 'register';
    criar.className = 'registerButton';
    criar.textContent = 'Criar Conta';

    cadastrar.appendChild(texto);
    cadastrar.appendChild(criar);

    contentForm.insertBefore(cadastrar, contentForm.children[3]);

}

