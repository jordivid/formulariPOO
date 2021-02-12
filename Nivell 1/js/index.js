import {Product} from "./product.js";

const avui = new Date();
let dd = avui.getDate();
let mm = avui.getMonth() + 1;

if(mm < 9) {
    mm = "0" + mm;
}
if(dd < 9) {
    dd = "0" + mm;
}

fecha.value = avui.getFullYear() + "-" + mm + "-" + dd;

formulari.addEventListener("submit", enviar);

function enviar(e) {
    e.preventDefault();
    let producte = new Product(product.value, price.value, fecha.value);
    console.log(`Nom: ${producte.Name}`);
    console.log(`Nom: ${producte.Price}`);
    console.log(`Nom: ${producte.Date}`);
}
