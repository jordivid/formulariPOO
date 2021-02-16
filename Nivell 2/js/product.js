export class Product {
    constructor(name, price, date, id) {
        this.name = name;
        this.price = price;
        this.date = date;
        this.id = id;
        this.code = this.GenerateCode();
    }

    get Name() {
        return this.name;
    }

    get Price() {
        return this.price;
    }

    get Date() {
        return this.date;
    }
    
    get Id() {
        return this.id;
    }

    get Code() {
        return this.code;
    }

    set Name(newName) {
        this.name = newName;
    }

    set Price(newPrice) {
        this.price = newPrice;
    }

    set Date(newDate) {
        this.date = newDate;    
    }
    
    set Code(newCode) {
        this.code = newCode;
    }

    Validate() {
        let validation = true;
               
        if(this.name == "") {
            validation = false;
        }
        if(this.price == "") {
            validation = false;
        }

        return validation;
    }

    GenerateCode() {
        // Generació del codi de la fitxa de producte a la llista de productes
        let codigo = '<div class="d-flex justify-content-between mb-1 prod" id="' + this.id +'">';
        codigo += '<div class="d-flex align-items-center flex-wrap">';
        codigo += `<div class="mr-2"><span class="font-weight-bold">Product name:</span> ${this.name}</div>`;
        codigo += `<div class="mr-2"><span class="font-weight-bold">Product Price:</span> <span id="p${this.id}">${this.price}</span></div>`;
        codigo += `<div><span class="font-weight-bold">Product Date:</span> <span id="d${this.id}">${this.date}</span></div></div>`;
        codigo += '<div class="d-flex align-items-center">';
        codigo += `<button type="button" class="btn btn-danger" id="b${this.id}">Delete</button></div>`;

        return codigo;
    }

    AddToList() {
        // S'afegeix el producte a la llista de productes
        productList.insertAdjacentHTML("beforeend", this.code);
    }

    RemoveFromList() {
        // S'elimina el producte de la llista de productes
        let father = document.getElementById("productList");
        let son = document.getElementById(this.id);
        father.removeChild(son);
    }

    Update() {
        document.getElementById("p" + this.id).innerText = this.price;
        document.getElementById("d" + this.id).innerText = this.date;
    }

}