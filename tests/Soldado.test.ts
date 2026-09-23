import {describe, test, expect} from "vitest";
import {Soldado} from "../src/Soldado.js";
import {Buque} from "../src/Buque.js";
import {Tanque} from "../src/Tanque.js";
import {Escudo} from "../src/Escudo.js";


describe ("Test de vida", () => {

    test("Soldado se encuentra vivo", () => {
        var soldado = new Soldado("Soldado");

        expect(soldado.estaVivo).toBe(true);

    });
});
    
describe("Disparos entre todos", ()=>{
    test("Soldado puede disparar a soldado y soldado pierde vida", ()=> {
        var soldado1 = new Soldado("Soldado1");
        var soldado2 = new Soldado("Soldado2");

        soldado2.disparar(soldado1);
        expect(soldado1.estaVivo).toBe(false);
    });

    test("Soldado puede disparar a tanque y tanque pierde vida", ()=> {
        var tanque1 = new Tanque("Tanque1");
        var soldado1 = new Soldado("Soldado1");

        soldado1.disparar(tanque1);
        expect(tanque1.estaVivo).toBe(true);
        soldado1.disparar(tanque1);
        expect(tanque1.estaVivo).toBe(false);
    });

    test("Soldado puede disparar a buque y buque pierde vida", ()=> {
        var soldado1 = new Soldado("Soldado1");
        var buque1 = new Buque("Buque1");

        soldado1.disparar(buque1);
        expect(buque1.estaVivo).toBe(true);
        soldado1.disparar(buque1);
        expect(buque1.estaVivo).toBe(true);
        soldado1.disparar(buque1);
        expect(buque1.estaVivo).toBe(false);
    });
});


describe ("Soldado con escudo", () =>{
    test("Soldado con escudo no muere con un disparo", ()=> {
        var soldado1 = new Soldado("Soldado 1");
        var soldado2 = new Soldado ("Soldado 2");
        var escudo1 = new Escudo(100);

        soldado1.tomarEscudo(escudo1);
        soldado2.disparar(soldado1);
        expect(soldado1.estaVivo).toBe(true);
    });
});
    

