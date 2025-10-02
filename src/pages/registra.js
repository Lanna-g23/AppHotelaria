import Form from "../components/Form.js";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import {createRequest} from "../api/clientsAPI.js"

export default function renderRegisterPage() {
    
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';
    const navbar = Navbar();
    nav.appendChild(navbar);

    const fot = document.getElementById('footer');
    fot.innerHTML = '';
    const footer = Footer();
    fot.appendChild(footer);

    const formulario = Form();
    const titulo = formulario.querySelector('h1');
    titulo.textContent = 'Cadastre-se';

    //Seleciono o elemento form que está presente em ./components/Form.js
    const Form = formulario.querySelector('form');

    //Criar o input para nome e adicionar em contentForm
    const nome = document.createElement('input');
    nome.type = 'text';
    nome.className = 'inputs';
    nome.placeholder = "Digite seu nome";

    const Cpf = document.createElement('input');
    Cpf.type = 'text';
    Cpf.className = 'inputs';
    Cpf.placeholder = 'Digite seu CPF';

    const Telefone = document.createElement('input');
    Telefone.type = 'text';
    Telefone.className = 'inputs';
    Telefone.placeholder = 'Digite seu Telefone';

    const Email = formulario.querySelector('input[type="email"]');
    
    const Senha = formulario.querySelector('input[type="password"]');
     
    const confSenha = document.createElement('input');
    confSenha.type = 'password';
    confSenha.placeholder = 'Confirme sua senha';
    confSenha.className = 'inputs';
   
    Form.insertBefore(nome, Form.children[0]);
    Form.insertBefore(Cpf, Form.children[1]);
    Form.insertBefore(Telefone, Form.children[2]);
    Form.insertBefore(confSenha, Form.children[5]);
    
    /*Adicionar confSenha como "child" de form que já contém
        4 elementos: input nome[0], input email[1], input password[2],
        button btn[3], ao adicionar conftSenha antes de btn[3], portanto
        utilizar insertBefore() e identificar a posição de btn[3] como uma
        "child" do elemento pai form
    */
    Form.insertBefore(confSenha, Form.children[3]);

    const btnRegister = formulario.querySelector('button');
    btnRegister.textContent = 'Criar conta';

    Form.addEventListener("submit", async (event) =>{
        event.preventDefault();

        const nome = nome.value.trim();
        const cpf = Cpf.value.trim();
        const telefone = Telefone.value.trim();
        const email = Email.value.trim();
        const senha = Senha.value.trim();
      
        try{
            const result = createRequest(nome, cpf, telefone, email, senha);
        }catch{
            console.log("Erro inesperado");
        }
    });

}
