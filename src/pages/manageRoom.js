import Form from "../components/Form";
import Navbar from "../components/Navbar";
import {addRoom}  from '../api/roomsAPI'

export default function renderManageRoom(){

    const nav = document.getElementById('navbar');
    nav.innerHTML = '';
    const navbar = Navbar();
    nav.appendChild(navbar);

    const form = Form();
    const contentForm = form.querySelector('form');

    //nome, numero, qtd_casal,
    const inNome = contentForm.querySelector('input[type=email]');
    inNome.type = 'text';
    inNome.placeholder = "Digite o nome"

    const inNumero = contentForm.querySelector('input[type=password]');
    inNumero.type = 'text';
    inNumero.placeholder = "Digite o número"


    const inQrd_Casal = document.createElement('select');
    inQrd_Casal.className = 'select-qtd';
    inQrd_Casal.style.borderWidth = '0.15rem';
    inQrd_Casal.innerHTML =
    `
    <option value="">Quantidades cama de casal</option>
    <option value="1">1 Pessoa</option>
    <option value="2">2 Pessoas</option>
    <option value="3">3 Pessoas</option>`

    const inQrd_Solteito = document.createElement('input');
    inQrd_Solteito.type = 'number';
    inQrd_Solteito.placeholder = 'Quantidade cama solteiro'
    inQrd_Solteito.min = 0;
    inQrd_Solteito.max = 3;

    const inPreco = document.createElement('input');
    inPreco.type = 'number';
    inPreco.placeholder = 'Digite o preço da diária';
    inPreco.step = "0.01";

    const subTitDisp = document.createElement('p');
    subTitDisp.textContent = 'Quarto disponivel'

    const divDisp = document.createElement('div');
    divDisp.className = 'd-flex flex-row justify-content-center';

    const labelTrue = document.createElement('label');
    labelTrue.textContent = 'Sim';
    const inDispTrue = document.createElement('input');
    inDispTrue.type = 'radio';
    inDispTrue.name = 'disponivel';
    inDispTrue.value = true;
    
    const labelFalse = document.createElement('label');
    labelFalse.textContent = 'Não';

    const inDispFalse = document.createElement('input');
    inDispFalse.type = 'radio';
    inDispFalse.name = 'disponivel';
    inDispFalse.value = false;

    divDisp.appendChild(subTitDisp);
    divDisp.appendChild(inDispTrue);
    divDisp.appendChild(labelTrue);


    contentForm.insertBefore(inDispFalse);
    divDisp.appendChild(labelFalse);

    const inFotos = document.createElement('input');
    inFotos.className = 'form-control';
    inFotos.type = 'file';
    inFotos.id = 'formFileMultiple';
    inFotos.multiple = true;
    inFotos.accept = "image/*";
    inFotos.name = 'fotos[]';

    /*
    inFotos.innerHTML = `
    <input name="fotos[]" type="file" multiple id="formFileMultiple"
    class="form-control" accept="imag/*"/>
*/
    
    contentForm.insertBefore(inQrd_Casal, contentForm.children[2]);
    contentForm.insertBefore(inQrd_Solteito, contentForm.children[3]);
    contentForm.insertBefore(inPreco, contentForm.children[4]);
    contentForm.insertBefore(divDisp, contentForm.children[5]);
    contentForm.insertBefore(inFotos, contentForm.children[6]);

    const btnRegisterRoom = contentForm.querySelector('button');
    btnRegisterRoom.textContent = 'Cadastrar';


    contentForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        try{
            const response = await addRoom(contentForm);
            console.log("Resposta do servidor: " + response);
        }catch(error){
            console.log("Erro ao enviar requisição: " + error.message);
        }
    });
}