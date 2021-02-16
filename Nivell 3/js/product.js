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
        let missatgeA = "Introdueix ";
        let missatgeB = "";
        let missatgeC = " del producte";

               
        if(this.name == "") {
            validation = false;
            missatgeB = "el nom";
        }
        if(this.price == "") {
            validation = false;
            if(missatgeB == "") {
                missatgeB = "el preu";
            } else {
                missatgeB += " i el preu";
            }
        }

        if(validation == false) {
            this.Notificar(missatgeA + missatgeB + missatgeC, "danger");
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
        this.Notificar(`S'ha creat el producte: ${this.name}`, "success");
    }

    RemoveFromList() {
        // S'elimina el producte de la llista de productes
        let father = document.getElementById("productList");
        let son = document.getElementById(this.id);
        father.removeChild(son);
        this.Notificar(`S'ha eliminat el producte: ${this.name}`, "danger");
    }

    Update() {
        document.getElementById("p" + this.id).innerText = this.price;
        document.getElementById("d" + this.id).innerText = this.date;
        this.Notificar(`S'ha actualitzat el producte: ${this.name}`, "success");
    }

    Notificar(missatge, classe) {
        /*
            missatge - El missatge a notificar
            classe   - La classe bootstrap aplicar a la notificació
        */
       areaNotificacions.innerHTML = `<div class="alert ` + `alert-${classe}` + ` alert-dismissible">
                        <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                        ${missatge}
                      </div>`;

    }
}