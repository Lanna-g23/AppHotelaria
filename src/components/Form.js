export default function Form() {
    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';
    divRoot.style.alignItems = 'center';
    divRoot.style.height = '100vh';

    const container = document.createElement('div');
    container.className = 'card p-4 shadow-lg d-flex flex-row'; 
    container.style.width = '100%';
    container.style.maxWidth = '900px'; 
    container.style.height = '550px';
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

    // Lado direito (formulário)

    const rightSide = document.createElement('div');
    rightSide.className = 'right-side p-4 d-flex flex-column justify-content-center';
    rightSide.style.width = '50%';

    const titulo = document.createElement('h1');
    titulo.textContent = 'Login';
    titulo.className = 'titulo mb-4';
    titulo.style.color = 'black';
    titulo.style.textAlign = 'center';

    const formulario = document.createElement('form');
    formulario.className = 'd-flex flex-column';

    const email = document.createElement('input');
    email.type = 'email';
    email.placeholder = "Digite seu e-mail";
    email.className = 'inputs';
    email.style.textAlign = 'center';
    email.style.textAlign = 'left';
    formulario.appendChild(email);

    const password = document.createElement('input');
    password.type ='password';
    password.placeholder = "Digite sua senha";
    password.className = 'inputs';
    password.style.textAlign = 'left';
    formulario.appendChild(password);

    const btn = document.createElement('button');
    btn.type = 'submit';
    btn.className = "btn btn-primary mt-4";
    btn.textContent = "Entrar"
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

