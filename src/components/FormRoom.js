export default function FormRoom() {
    const DivRoom = document.getElementById('root');
    DivRoom.innerHTML = '';
    DivRoom.className = 'mt-5';
    DivRoom.style.height = '100vh';

    const container = document.createElement('div');
    container.className = 'card p-4 shadow-lg d-flex flex-row';
    container.style.width = '100%';
    container.style.maxWidth = '900px';
    container.style.height = '599px';
    container.style.border = 'none';
    container.style.backgroundColor = '#ffffff';
    container.style.backdropFilter = 'blur(10px) brightness(0.8)';
    container.style.margin = '0 auto';

    const leftSide = document.createElement('div');
    leftSide.className = 'left-side d-flex align-items-center justify-content-center';
    leftSide.style.width = '57%';
    leftSide.style.backgroundImage = 'url("public/assets/imgs/LeftSide.jpg")';
    leftSide.style.backgroundSize = 'cover';
    leftSide.style.backgroundPosition = 'center';
    leftSide.style.borderRadius = '10px 0 0 10px';

    const rightSide = document.createElement('div');
    rightSide.className = 'right-side p-4 d-flex flex-column justify-content-center';
    rightSide.style.width = '50%';

    const tituloRoom = document.createElement('h1');
    tituloRoom.textContent = 'Cadastro de Quartos';
    tituloRoom.className = 'titulo mb-4';
    tituloRoom.style.color = 'black';
    tituloRoom.style.textAlign = 'center';

    const form = document.createElement('form');
    form.className = 'd-flex flex-column';

    const nomeRoom = document.createElement('input');
    nomeRoom.type = 'text';
    nomeRoom.style.textAlign = 'left';
    nomeRoom.max = '50';
    nomeRoom.placeholder = "Digite o nome do quarto";
    nomeRoom.className = 'inputs';
    form.appendChild(nomeRoom);

    const numeroRoom = document.createElement('input');
    numeroRoom.type = 'text';
    numeroRoom.style.textAlign = 'left';
    numeroRoom.placeholder = "Digite o numero";
    numeroRoom.className = 'inputs';
    form.appendChild(numeroRoom);

    const qtd_cama_casal = document.createElement('input');
    qtd_cama_casal.type = 'number';
    qtd_cama_casal.style.textAlign = 'left';
    qtd_cama_casal.placeholder = 'Quantidade cama casal';
    qtd_cama_casal.className = 'inputs';
    form.appendChild(qtd_cama_casal);

    const qtd_cama_solteiro = document.createElement('input');
    qtd_cama_solteiro.type = 'number';
    qtd_cama_solteiro.style.textAlign = 'left';
    qtd_cama_solteiro.placeholder = 'Quantidade cama solteiro';
    qtd_cama_solteiro.className = 'inputs';
    form.appendChild(qtd_cama_solteiro);

    const preco = document.createElement('input');
    preco.type = 'number';
    preco.style.textAlign = 'left';
    preco.placeholder = 'Digite o preço do quarto';
    preco.className = 'inputs';
    form.appendChild(preco);

    const disponContainer = document.createElement('div');
    disponContainer.className = 'd-flex align-items-center mt-3';
    disponContainer.style.gap = '10px';
    disponContainer.style.justifyContent = 'center';

    const perguntaDisponivel = document.createElement('h2');
    perguntaDisponivel.textContent = 'O quarto está disponível?';
    perguntaDisponivel.style.fontSize = '18px';
    perguntaDisponivel.style.margin = '0';
    perguntaDisponivel.style.color = '#000';

    const disponivelSim = document.createElement('input');
    disponivelSim.type = 'radio';
    disponivelSim.name = 'disponivel';
    disponivelSim.value = 'true';

    const labelSim = document.createElement('label');
    labelSim.textContent = 'Sim';
    labelSim.style.marginRight = '10px';

    const disponivelNao = document.createElement('input');
    disponivelNao.type = 'radio';
    disponivelNao.name = 'disponivel';
    disponivelNao.value = 'false';

    const labelNao = document.createElement('label');
    labelNao.textContent = 'Não';

    disponContainer.appendChild(perguntaDisponivel);
    disponContainer.appendChild(disponivelSim);
    disponContainer.appendChild(labelSim);
    disponContainer.appendChild(disponivelNao);
    disponContainer.appendChild(labelNao);
    form.appendChild(disponContainer);

    const btnSubmit = document.createElement('button');
    btnSubmit.type = 'submit';
    btnSubmit.textContent = 'Cadastrar Quarto';
    btnSubmit.className = 'mt-4 btn-css';
    form.appendChild(btnSubmit);

    rightSide.appendChild(tituloRoom);
    rightSide.appendChild(form);
    container.appendChild(leftSide);
    container.appendChild(rightSide);
    DivRoom.appendChild(container);

}