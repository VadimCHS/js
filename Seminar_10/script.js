"use script"

const dataJs = JSON.parse(data);

const containerCarts = document.querySelector("div.container-сarts");
console.log(containerCarts);

dataJs.forEach(element => {
    const tempEl = document.getElementById("cart-template");
    const clone = tempEl.content.cloneNode(true);
    
    clone.querySelector("img.cart__img").src = element.url;
    clone.querySelector("h2.cart__title-name").innerHTML = element.name;
    clone.querySelector("p.cart__description").innerHTML = element.description;
    clone.querySelector("p.cart__price").innerHTML = element.price;

    containerCarts.appendChild(clone);
});