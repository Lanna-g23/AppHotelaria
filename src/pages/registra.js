import Form from "../components/Form.js";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import {createRequest} from "../api/clientsAPI.js"

export default function renderRegisterPage() {
    
    //Navbar
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';
    const navbar = Navbar();
    nav.appendChild(navbar);

    //Footer
    const fot = document.getElementById('footer');
    fot.innerHTML = '';
    const footer = Footer();
    fot.appendChild(footer);

    //Form
    const form = Form();
    const titulo = form.querySelector('h1');
    titulo.textContent = 'Cadastre-se';

    //Seleciono o elemento form que está presente em ./components/Form.js
    const contentForm = form.querySelector('form');

    //Criar o input para nome e adicionar em contentForm
    const inNome = document.createElement('input');
    inNome.type = 'text';
    inNome.className = 'inputs';
    inNome.placeholder = "Digite seu nome";

    const inCpf = document.createElement('input');
    inCpf.type = 'text';
    inCpf.className = 'inputs';
    inCpf.placeholder = 'Digite seu CPF';

    const inTelefone = document.createElement('input');
    inTelefone.type = 'text';
    inTelefone.className = 'inputs';
    inTelefone.placeholder = 'Digite seu Telefone';

    const inEmail = form.querySelector('input[type="email"]');
    
    const inSenha = form.querySelector('input[type="password"]');
     
    const confSenha = document.createElement('input');
    confSenha.type = 'password';
    confSenha.placeholder = 'Confirme sua senha';
    confSenha.className = 'inputs';
    /*Adicionar confSenha como "child" de form que já contém
        4 elementos: input nome[0], input email[1], input password[2],
        button btn[3], ao adicionar conftSenha antes de btn[3], portanto
        utilizar insertBefore() e identificar a posição de btn[3] como uma
        "child" do elemento pai form
    */

    const cam = document.querySelector(".cart");
    if(cam) cam.remove();
   
    contentForm.insertBefore(inNome, contentForm.children[0]);
    contentForm.insertBefore(inCpf, contentForm.children[1]);
    contentForm.insertBefore(inTelefone, contentForm.children[2]);
    contentForm.insertBefore(confSenha, contentForm.children[5]);
    

    const btnRegister = form.querySelector('button');
    btnRegister.textContent = 'Criar conta';

    contentForm.addEventListener("submit", async (event) =>{
        event.preventDefault();

        const nome = inNome.value.trim();
        const cpf = inCpf.value.trim();
        const telefone = inTelefone.value.trim();
        const email = inEmail.value.trim();
        const senha = inSenha.value.trim();
      
        try{
            const result = createRequest(nome, cpf, telefone, email, senha);
        }catch{
            console.log("Erro inesperado");
        }
    });

}
