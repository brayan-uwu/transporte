class Transporte {

    numero_de_serie;
    capacidad;
    combustible;
    precio;
    constructor(ns, cp, cu, pr) {
        this.numero_de_serie = ns;
        this.capacidad = cp;
        this.combustible = cu;
        this.precio = pr;
    }
}
var trans1 = new Transporte("12363", "1000 ml", "5000ml", "$189999");