export default function Categoria() {
    // Div Grandona

    const divCard = document.createElement('div');
    divCard.className = 'divPrincipal';
    divCard.style.backgroundColor = '#3c5ec2ff'; 
    divCard.style.padding = '20px 30px';
    divCard.style.display = 'flex';
    divCard.style.marginLeft = '100px';
    divCard.style.marginTop = '10px';
    divCard.style.justifyContent = 'space-between';
    divCard.style.alignItems = 'center';
    divCard.style.width = '65%';
    divCard.style.borderRadius = '20px';
    divCard.style.fontFamily = 'Arial, sans-serif';
    divCard.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';

    const category = document.createElement('h2');
    category.textContent = 'Categoria de quarto';
    category.style.fontSize = '22px';
    category.style.color = 'white';
    category.style.margin = '0';
    divCard.appendChild(category);

    const qtPeople = document.createElement('h2');
    qtPeople.textContent = 'Quantas Pessoas?';
    qtPeople.style.fontSize = '18px';
    qtPeople.style.color = 'white';
    qtPeople.style.margin = '0';
    divCard.appendChild(qtPeople);

    const preco = document.createElement('div');
    preco.style.backgroundColor = '#202020ff'; 
    preco.style.padding = '12px 20px';
    preco.style.borderRadius = '10px';
    preco.style.color = 'white';
    preco.style.fontWeight = 'bold';
    preco.style.boxShadow = '0 3px 6px rgba(0,0,0,0.15)';

    const priceQtd = document.createElement('h2');
    priceQtd.textContent = 'Preço por diárias';
    priceQtd.style.margin = '0';
    priceQtd.style.fontSize = '18px';
    preco.appendChild(priceQtd);
    divCard.appendChild(preco);

    return divCard;
}