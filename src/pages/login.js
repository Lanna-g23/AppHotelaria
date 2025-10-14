import { loginRequest, saveToken } from "../api/AuthAPI.js";
import Form from "../components/Form.js";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";


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
                console.log("Login realizado com sucesso", result);
                saveToken(result.token);
                
                let tipoDoUsuario = "cliente";
                if(result.raw?.tipo === "funcionario" || result.raw?.role === "admin"){
                    tipoDoUsuario = "funcionario";
            }localStorage.setItem("tipo_usuario", tipoDoUsuario);

                if(tipoDoUsuario === "funcioanario"){
                    console.log("Usuario é funcionario redirecionando.");
                }else{
                    console.log("Usuario é cliente redirecionando.")
                    window.location.pathname = "home";
                }

            }else{
                console.log('login invalido!');
            }
        } catch {
            console.log("Erro Inesperado!");
        }
    });

    const campo = document.querySelector(".cart");
    if(campo) campo.remove();

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

