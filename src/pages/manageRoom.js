import Form from "../components/Form.js";
import Navbar from "../components/Navbar.js";
import {addRoom}  from '../api/roomsAPI.js'

export default function renderManageRoom(){

    const nav = document.getElementById('navbar');
    nav.innerHTML = '';
    const navbar = Navbar();
    nav.appendChild(navbar);

    const form = Form();
    const titulo = form.querySelector('h1');
    titulo.textContent = 'Gerenciar quarto';

    const contentForm = form.querySelector('form');
    contentForm.enctype = "multipart/form-data";

    //nome, numero, qtd_casal,
    const inNome = contentForm.querySelector('input[type=email]');
    inNome.type = 'text';
    inNome.placeholder = "Digite o nome"
    inNome.name = 'nome';

    const inNumero = contentForm.querySelector('input[type=password]');
    inNumero.type = 'text';
    inNumero.placeholder = "Digite o número"
    inNumero.name = 'numero';

    const inQtd_Casal = document.createElement('select');
    inQtd_Casal.className = 'select-qtd';
    inQtd_Casal.style.borderWidth = '0.15rem';
    inQtd_Casal.innerHTML =
    `
    <option  class="" value="0">Quantidades cama de casal</option>
    <option value="1">1 Pessoa</option>
    <option value="2">2 Pessoas</option>
    <option value="3">3 Pessoas</option>`

    inQtd_Casal.name = "qtd_casal";

    const inQtd_Solteito = document.createElement('input');
    inQtd_Solteito.type = 'number';
    inQtd_Solteito.placeholder = 'Quantidade cama solteiro'
    inQtd_Solteito.min = 0;
    inQtd_Solteito.max = 3;
    inQtd_Solteito.name = "qtd_solteiro";

    const inPreco = document.createElement('input');
    inPreco.type = 'number';
    inPreco.placeholder = 'Digite o preço da diária';
    inPreco.step = "0.01";
    inPreco.name = "preco";

    const subTitDisp = document.createElement('p');
    subTitDisp.textContent = 'Quarto disponivel'

    const divDisp = document.createElement('div');
    divDisp.className = 'd-flex flex-row justify-content-center';

    const labelTrue = document.createElement('label');
    labelTrue.textContent = 'Sim';
    const inDispTrue = document.createElement('input');
    inDispTrue.type = 'radio';
    inDispTrue.name = 'disponivel';
    inDispTrue.value = "1";
    
    const labelFalse = document.createElement('label');
    labelFalse.textContent = 'Não';

    const inDispFalse = document.createElement('input');
    inDispFalse.type = 'radio';
    inDispFalse.name = 'disponivel';
    inDispFalse.value = "0";

    divDisp.appendChild(subTitDisp);
    divDisp.appendChild(inDispTrue);
    divDisp.appendChild(labelTrue);


    contentForm.appendChild(inDispFalse);
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
    
    contentForm.insertBefore(inQtd_Casal, contentForm.children[2]);
    contentForm.insertBefore(inQtd_Solteito, contentForm.children[3]);
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