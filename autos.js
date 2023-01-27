class Auto {
    clutch;
    caballos_de_fuerza;
    marca_filtro;
    numero_de_turbo;
    tipo_suspencion;
    constructor(cl, cdf, mf, nt, ts) {
        this.clutch = cl;
        this.caballos_de_fuerza = cdf;
        this.marca_filtro = mf;
        this.numero_de_turbo = nt;
        this.tipo_suspencion = ts;
    }
}
var aut1 = new Auto("si,talvez no le se a los clutchs :(", "20 caballos de fuerza", "samsung", "848484893", "reflex");