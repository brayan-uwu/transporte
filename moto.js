class Moto extends Transporte {
    matricula;
    manubrio;
    marca_de_llantas;
    marca_de_asiento;
    constructor(ma, manu, mll, mda) {
        this.matricula = ma;
        this.manubrio = manu;
        this.marca_de_llantas = mll;
        this.marca_de_asiento = mda
    }
}
var m1 = new Moto("123", "189 caballos", "wollvagen", "chelleny");