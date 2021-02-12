import {Product} from "./product.js";

inicialitzar();
var objectes = new Map(); // Contenidor pels objectes Product
var indiceId = 0;         // Comptador incremental pels id de productes

btnEnviar.addEventListener("click", enviar);

function inicialitzar() {
    // Inicialització del formulari
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

    product.value = "";
    price.value = "";
    product.focus();
}

function enviar(e) {
    // Es crea l'objecte Product, es valida i s'afegeix a la llista de productes
    let producte = new Product(product.value.trim(), price.value, fecha.value, "p" + (indiceId + 1));
    let validation = producte.Validate();
    
    if(validation == false) {
        if(product.value.trim() == "") {
            product.focus();
        } else {
            price.focus();
        }
        return;
    }

    ++indiceId;
    producte.AddToList();
    document.getElementById("b" + producte.id).addEventListener("click", eliminar);

    objectes.set("b" + producte.id, producte);
    inicialitzar();
}

function eliminar(e) {
    // S'elimina la ficha de producte de la llista i també l'objecte
    let producte = objectes.get(e.target.id);
    producte.RemoveFromList();
    objectes.delete(e.target.id);
}