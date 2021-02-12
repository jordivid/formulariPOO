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

    set Name(newName) {
        this.name = newName;
    }

    set Price(newPrice) {
        this.price = newPrice;
    }

    set Date(newDate) {
        this.date = newDate;    
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
            this.Notificar(missatgeA + missatgeB + missatgeC, true);
        }
        return validation;
    }

    GenerateCode() {
        // Generació del codi de la fitxa de producte a la llista de productes
        let codigo = '<div class="d-flex justify-content-between mb-1 prod" id="' + this.id +'">';
        codigo += '<div class="d-flex align-items-center flex-wrap">';
        codigo += `<div class="mr-2"><span class="font-weight-bold">Product name:</span> ${this.name}</div>`;
        codigo += `<div class="mr-2"><span class="font-weight-bold">Product Price:</span> ${this.price}</div>`;
        codigo += `<div><span class="font-weight-bold">Product Date:</span> ${this.date}</div></div>`;
        codigo += '<div class="d-flex align-items-center">';
        // codigo += '<button type="button" class="btn btn-danger" id="b' + this.id +'">Delete</button></div>';
        codigo += `<button type="button" class="btn btn-danger" id="b${this.id}">Delete</button></div>`;

        return codigo;
    }

    AddToList() {
        // S'afegeix el producte a la llista de productes
        productList.insertAdjacentHTML("beforeend", this.code);
        this.Notificar(`S'ha creat el producte: ${this.name}`, false);
    }

    RemoveFromList() {
        // S'elimina el producte de la llista de productes
        let father = document.getElementById("productList");
        let son = document.getElementById(this.id);
        father.removeChild(son);
        this.Notificar(`S'ha eliminat el producte: ${this.name}`, false);
    }

    Notificar(missatge, err) {
        /*
            missatge - El missatge a notificar
            err      - true si és un error, false si es un avís
        */
        let type = "";

        if(err) {
            areaNotificacions.style.backgroundColor = "red";
            type = "<span class='material-icons mr-1'>report_problem</span>";
        } else {
            areaNotificacions.style.backgroundColor = "rgb(83, 182, 83)";
            type = "<span class='material-icons'>info</span>";
        }
        notificacio.innerHTML = type + "<span class='ml-2'>" + missatge + "</span>";

    }
}