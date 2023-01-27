class Tractor {
    motor;
    caja_de_velocidad;
    transmision;
    ruedas;
    barra_de_tiro;
    constructor(mt, cdv, tm, r, bdt) {
        this.motor = mt;
        this.caja_de_velocidad = cdv;
        this.transmision = tm;
        this.ruedas = r;
        this.barra_de_tiro = bdt;
    }
}
var mot1 = new Tractor("g3020", "1229 celocidad", "1889", "cheline", "34");