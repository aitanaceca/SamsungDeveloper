import { Persona } from './Entities/Persona';
import { Direccion } from './Entities/Direccion';
import { Mail } from './Entities/Mail';
import { Telefono } from './Entities/Telefono';
import { Sexo } from './Entities/Shared/Sexo';

class Main {
    crearAgenda():Array<Persona> {
        let agenda: Array<Persona> = [];

        let direccion1: Direccion = new Direccion("Calle Estrella", 111, 6, "A", 28901, "Madrid", "Madrid");
        let direccion2: Direccion = new Direccion("Calle Sol", 2, 1, "B", 28902, "Segovia", "Segovia");
        let direccion3: Direccion = new Direccion("Calle Luna", 13, 4, "C", 28903, "Cáceres", "Cáceres");
        let direccion4: Direccion = new Direccion("Calle Pez Volador", 22, 2, "D", 28904, "Sevilla", "Sevilla");
    
        let telefono1: Telefono = new Telefono("Personal", "+34 111 11 11 11");
        let telefono2: Telefono = new Telefono("Trabajo", "+34 222 22 22 22");
        let telefono3: Telefono = new Telefono("Personal", "+34 333 33 33 33");
        let telefono4: Telefono = new Telefono("Trabajo", "+34 444 44 44 44");
    
        let email1: Mail = new Mail("Personal", "email@personal.es");
        let email2: Mail = new Mail("Empresa", "correo@empresa.es");
        let email3: Mail = new Mail("Personal", "personal@email.com");
        let email4: Mail = new Mail("Empresa", "empresa@correo.com");

        let date1: Date = new Date("1998-09-23");
        let date2: Date = new Date("1999-12-04");
        let date3: Date = new Date("2000-03-05");
    
        let persona1: Persona = new Persona("Diego", "Gallu", 34, "11111111A", date1, "Azul", Sexo.M, [direccion1], [email1], [telefono1, telefono2], "El más genio de su casa.");
        let persona2: Persona = new Persona("Lucía", "Pérez-Galdós", 56, "22222222B", date2, "Verde", Sexo.F, [direccion2], [email2, email3], [telefono3], "La más salá del barrio.");
        let persona3: Persona = new Persona("Hermenegilda", "García", 41, "33333333C", date3, "Morado", Sexo.F, [direccion3, direccion4], [email4], [telefono4], "La señora de la frutería.");

        agenda.push(persona1, persona2, persona3);
        return agenda;
    }

    mostrarAgenda(personas: Array<Persona>) {
        let index = 1;
        personas.forEach(persona => {
            console.log(`Persona ${index}: `);
            persona.mostrarPersona();
            console.log();
            index++;
        });
    }

    searchPerson(searchedDni: string, personas: Array<Persona>) {
        for (var elem of personas) {
            if (searchedDni === elem.dni) {
                var direccion = new Direccion("Calle nueva", 12, 2, "B", 12345, "Parla", "Madrid");
                var telefono = new Telefono("Personal", "+39 665 98 09 43");
                var mail = new Mail("Empresa", "lamejorempresa@empresa.es");
                
                var listaDirecciones = elem.direcciones;
                var listaTelefonos = elem.telefonos;
                var listaMails = elem.mails;

                listaDirecciones.push(direccion);
                listaTelefonos.push(telefono);
                listaMails.push(mail);

                elem.direcciones = listaDirecciones;
                elem.telefonos = listaTelefonos;
                elem.mails = listaMails;
            }
        }
    }
}

var main: Main = new Main();
var personas: Array<Persona> = main.crearAgenda();
console.log("################## AGENDA ORIGINAL ##################");
main.mostrarAgenda(personas);

var searchedDni = "33333333C";
main.searchPerson(searchedDni, personas);
console.log("################## AGENDA ACTUALIZADA ##################");
main.mostrarAgenda(personas);
