export class Mail {
    _tipo: string;
    _direccion: string;

    constructor(tipo: string, direccion: string) {
        let emailRegex = new RegExp("^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$");

        this._tipo = tipo;

        if (emailRegex.test(direccion)) {
            this._direccion = direccion;
        } else {
            throw "Formato de email incorrecto"
        } 
    }

    set tipo(tipo: string) {
        this._tipo = tipo;
    }

    get tipo() {
        return this._tipo;
    }

    set direccion(direccion: string) {
        this._direccion = direccion;
    }

    get direccion() {
        return this._direccion;
    }

    mostrarMail() {
        console.log("       Email: ");
        console.log("           Tipo: ", this._tipo);
        console.log("           Direccion: ", this._direccion);
    }
}