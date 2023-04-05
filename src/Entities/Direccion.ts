export class Direccion {
    _calle: string;
    _numero: number;
    _piso: number;
    _letra: string;
    _cp: number;
    _poblacion: string;
    _provincia: string;

    constructor(calle: string, numero: number, piso: number, letra: string, cp: number, poblacion: string, provincia: string) {
        this._calle = calle;
        this._numero = numero;
        this._piso = piso;
        this._letra = letra;
        this._cp = cp;
        this._poblacion = poblacion;
        this._provincia = provincia;
    }

    set calle(calle: string) {
        this._calle = calle;
    }

    get calle() {
        return this._calle;
    }

    set numero(numero: number) {
        this._numero = numero;
    }

    get numero() {
        return this._numero;
    }

    set piso(piso: number) {
        this._piso = piso;
    }

    get piso() {
        return this._piso;
    }

    set letra(letra: string) {
        this._letra = letra;
    }

    get letra() {
        return this._letra;
    }

    set cp(cp: number) {
        this._cp = cp;
    }

    get cp() {
        return this._cp;
    }

    set poblacion(poblacion: string) {
        this._poblacion = poblacion;
    }

    get poblacion() {
        return this._poblacion;
    }

    set provincia(provincia: string) {
        this._provincia = provincia;
    }

    get provincia() {
        return this._provincia;
    }

    mostrarDireccion() {
        console.log("       Direccion: ");
        console.log("           Calle: ", this._calle);
        console.log("           Numero: ", this._numero);
        console.log("           Piso: ", this._piso);
        console.log("           Letra: ", this._letra);
        console.log("           Codigo postal: ", this._cp);
        console.log("           Poblacion: ", this._poblacion);
        console.log("           Provincia: ", this._provincia);
    }
}