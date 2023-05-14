export class Telefono {
    _tipo: string;
    _numero: string;

    constructor(tipo: string, numero: string) {
        this._tipo = tipo;
        this._numero = numero;
    }

    set tipo(tipo: string) {
        this._tipo = tipo;
    }

    get tipo() {
        return this._tipo;
    }

    set numero(numero: string) {
        this._numero = numero;
    }

    get numero() {
        return this._numero;
    }

    mostrarTelefono() {
        console.log("       Teléfono: ");
        console.log("           Tipo: ", this._tipo);
        console.log("           Número: ", this._numero);
    }
}