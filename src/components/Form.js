export default function Form() {
    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';
    divRoot.style.alignItems = "center";
    divRoot.style.height = "100vh";

    const container = document.createElement('div');
    container.className = 'card p-4 shadow-lg';
    container.style.width = '100%';
    container.style.maxWidth = '400px';
    divRoot.appendChild(container);

    const leftSide = document.createElement('div');
    leftSide.className = 'left-side d-flex align-items-center justify-content-center';
    leftSide.style.width = '57%';
    leftSide.style.backgroundImage = 'url("public/assets/imgs/LeftSide.jpg")';
    leftSide.style.backgroundSize = 'cover';
    leftSide.style.backgroundPosition = 'center';
    leftSide.style.borderRadius = '10px 0 0 10px';

    // Lado direito (formulário)

    const rightSide = document.createElement('div');
    rightSide.className = 'right-side p-4 d-flex flex-column justify-content-center';
    rightSide.style.width = '50%';

    const titulo = document.createElement('h1');
    titulo.textContent = 'Faça seu login';
    titulo.className = 'titulo';

    const formulario = document.createElement('form');
    formulario.className = 'd-flex flex-column';

    const email = document.createElement('input');
    email.type = 'email';
    email.placeholder = "Digite seu e-mail";
    formulario.appendChild(email);

    const password = document.createElement('input');
    password.type ='password';
    password.placeholder = "Digite sua senha";
    formulario.appendChild(password);

    const btn = document.createElement('button');
    btn.type = 'submit';
    btn.textContent = "Entrar"
    btn.className = 'btn btn-primary';
    formulario.appendChild(btn);


   // const cdt = document.createElement('input');
   // cdt.type = 'criar Conta';
   // cdt.


    rightSide.appendChild(titulo);
    rightSide.appendChild(formulario);


    container.appendChild(leftSide);
    container.appendChild(rightSide);

    divRoot.appendChild(container);

    return divRoot;
}

