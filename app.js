// const cardImg =[
//     'https://trikky.ru/wp-content/blogs.dir/1/files/2022/08/31/1621660832-9-phonoteka-org-p-sve.jpg',
//     'https://twam.ru/wp-content/uploads/2024/03/nebo-estetika-3.webp',
//     'https://sotni.ru/wp-content/uploads/2023/08/rozovoe-oblako-161.webp',
//     'https://sotni.ru/wp-content/uploads/2023/08/rozovoe-oblako-145.webp'
// ]

function cards (product){
    const contAiner = document.getElementsByClassName('.container');
    const card1 = document.createElement('div');
    card1.className = 'product-card';

    const image = document.createElement('img');
    image.src = product.image;
    image.className = 'https://sotni.ru/wp-content/uploads/2023/08/rozovoe-oblako-145.webp';
    card1.appendChild(image)

    const name = document.createElement('h4');
    name.textContent = product.name;
    name.className = 'product-name';
    card1.appendChild(name);

    const price = document.createElement('p');
    price.textContent = `${product.price} p`;
    price.className ="product-price";
    card1.appendChild(price);  
}

const product = {
    name: "LapTope",
    price: "50000",
    image: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16e0d?ver=055e/100x200"
}

cards(product);