import FormR from "../components/FormRoom.js";

export default function RenderRegisterRoom() {
    FormR();

    const contentForm = FormR.querySelector('form');

    const nomeRoom = contentForm.querySelector('input[type="text"]');
    const numeroRoom = contentForm.querySelector('input[type="number"]');
    const qtd_cama_casal = contentForm.querySelector('input[type="number"]');
    const qtd_cama_solteiro = contentForm.querySelector('input[type="number"]');
    const preco = contentForm.querySelector('input[type="number"]');
    
}