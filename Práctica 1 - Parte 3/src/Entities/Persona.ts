import { Sexo } from './Shared/Sexo';
import { Direccion } from './Direccion';
import { Mail } from './Mail';
import { Telefono } from './Telefono';

export class Persona {
    _nombre: string;
    _apellidos: string;
    _edad: number;
    _dni: string;
    _cumple: Date;
    _colorFav: string;
    _sexo: Sexo;
    _direcciones: Array<Direccion>;
    _mails: Array<Mail>;
    _telefonos: Array<Telefono>;
    _notas: string;

    constructor(nombre: string, apellidos: string, edad: number, dni: string, cumple: Date, colorFav: string, sexo: Sexo, direcciones: Array<Direccion>, mails: Array<Mail>, telefonos: Array<Telefono>, notas: string) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._dni = dni;
        this._cumple = cumple;
        this._colorFav = colorFav;
        this._sexo = sexo;
        this._direcciones = direcciones;
        this._mails = mails;
        this._telefonos = telefonos;
        this._notas = notas;
    }

    set nombre(nombre: string) {
        this._nombre = nombre;
    }

    get nombre() {
        return this._nombre;
    }

    set apellidos(apellidos: string) {
        this._apellidos = apellidos;
    }

    get apellidos() {
        return this._apellidos;
    }

    set edad(edad: number) {
        this._edad = edad;
    }

    get edad() {
        return this._edad;
    }

    set dni(dni: string) {
        this._dni = dni;
    }

    get dni() {
        return this._dni;
    }

    set cumple(cumple: Date) {
        this._cumple = cumple;
    }

    get cumple() {
        return this._cumple;
    }

    set colorFav(colorFav: string) {
        this._colorFav = colorFav;
    }

    get colorFav() {
        return this._colorFav;
    }

    set sexo(sexo: Sexo) {
        this._sexo = sexo;
    }

    get sexo() {
        return this._sexo;
    }

    set direcciones(direcciones: Array<Direccion>) {
        this._direcciones = direcciones;
    }

    get direcciones() {
        return this._direcciones;
    }

    set mails(mails: Array<Mail>) {
        this._mails = mails;
    }

    get mails() {
        return this._mails;
    }

    set telefonos(telefonos: Array<Telefono>) {
        this._telefonos = telefonos;
    }

    get telefonos() {
        return this._telefonos;
    }

    set notas(notas: string) {
        this._notas = notas;
    }

    get notas() {
        return this._notas;
    }

    mostrarDirecciones(direcciones: Array<Direccion>) {
        direcciones.forEach(dir => {
            dir.mostrarDireccion();
        });
    }

    mostrarMails(mails: Array<Mail>) {
        mails.forEach(mail => {
            mail.mostrarMail();
        });
    }

    mostrarTelefonos(telefonos: Array<Telefono>) {
        telefonos.forEach(tel => {
            tel.mostrarTelefono();
        });
    }

    mostrarPersona() {
        const cumple = this._cumple.toISOString().split('T');
        console.log("   Nombre: ", this._nombre);
        console.log("   Apellidos: ", this._apellidos);
        console.log("   Edad: ", this._edad);
        console.log("   DNI: ", this._dni);
        console.log("   Cumpleaños: ", cumple[0]);
        console.log("   Color favorito: ", this._colorFav);
        console.log("   Sexo: ", this._sexo);
        console.log("   Direcciones: ");
        this.mostrarDirecciones(this._direcciones)
        console.log("   Mails: ");
        this.mostrarMails(this._mails)
        console.log("   Telefonos: ");
        this.mostrarTelefonos(this._telefonos)
        console.log("   Notas: ", this._notas);
    }
}