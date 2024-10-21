import { products, sales_products } from "./utils/products";

const productsContainer = document.querySelector('.products-container');

productsContainer.innerHTML = null;
products.forEach((product) => {


    const divCard = document.createElement('div');
    divCard.classList.add('card')

    const imgCard = document.createElement('img');
    imgCard.src = product.image;
    divCard.appendChild(imgCard);

    const releaseDiv = document.createElement('div');
    releaseDiv.classList.add('release-tag')
    releaseDiv.textContent = 'lançamento';
    divCard.appendChild(releaseDiv);

    const highlightDiv = document.createElement('div');
    highlightDiv.classList.add('product-highlight');

    const titleH3 = document.createElement('h3');
    titleH3.classList.add('beige-text');
    titleH3.textContent = product.title;
    highlightDiv.appendChild(titleH3);
    

    const priceDiv = document.createElement('div');
    const priceSpan = document.createElement('span');
    const priceSpan2 = document.createElement('span');
    priceSpan.classList.add('blue-text');
    priceSpan2.classList.add('blue-text');

    if (product.stock === true){

        priceSpan.classList.add('price');
        priceSpan2.classList.add('alt-price');
    
        priceSpan.textContent = `R$ ${product.price}`;
        priceSpan2.textContent = `R$ ${product.price} à vista com desconto Pix`;
        priceDiv.appendChild(priceSpan);
        priceDiv.appendChild(priceSpan2);
    
        highlightDiv.appendChild(priceDiv);
    }else{
        priceDiv.classList.add('out-stock');
        priceSpan.classList.add('price');
        
        priceSpan.textContent = 'Esse acabou :(';
        priceSpan2.textContent = 'Avise-me quando chegar';
        priceDiv.appendChild(priceSpan);
        priceDiv.appendChild(priceSpan2);
    
        highlightDiv.appendChild(priceDiv);
    }

    divCard.appendChild(highlightDiv);

    productsContainer.appendChild(divCard);
})

//released products
const salesContainer = document.querySelector('.sales-container')
salesContainer.innerHTML = null;

sales_products.forEach((product) => {
    const salesCard = document.createElement('div')
    salesCard.classList.add('card');
    const imgCard = document.createElement('img')
    imgCard.src = product.image;

    salesCard.appendChild(imgCard);

    const releaseDiv = document.createElement('div');
    releaseDiv.classList.add('release-tag')
    releaseDiv.textContent = 'lançamento';
    salesCard.appendChild(releaseDiv);

    
    const highlightDiv = document.createElement('div');
    highlightDiv.classList.add('product-highlight');

    const titleH3 = document.createElement('h3');
    titleH3.classList.add('beige-text');
    titleH3.textContent = product.title;
    highlightDiv.appendChild(titleH3);
    

    const priceDiv = document.createElement('div');
    const priceSpan = document.createElement('span');
    const priceSpan2 = document.createElement('span');
    priceSpan.classList.add('blue-text');
    priceSpan2.classList.add('blue-text');

    priceSpan.classList.add('price');
    priceSpan2.classList.add('alt-price');
    
    priceSpan.textContent = `R$ ${product.price}`;
    priceSpan2.textContent = `R$ ${product.price} à vista com desconto Pix`;
    priceDiv.appendChild(priceSpan);
    priceDiv.appendChild(priceSpan2);
    
    highlightDiv.appendChild(priceDiv);

    salesCard.appendChild(highlightDiv);
    salesContainer.appendChild(salesCard);


})