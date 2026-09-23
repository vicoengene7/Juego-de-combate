import {describe, test, expect} from "vitest";
import {Soldado} from "../src/Soldado.js"
import {Tanque} from "../src/Tanque.js"
import {Buque} from "../src/Buque.js"
import {Escudo} from "../src/Escudo.js"


describe ("Tanque", () => {
    test("Test de vida", ()=>{
        var tanque = new Tanque("Tanque");

        expect(tanque.estaVivo).toBe(true);

    });

    test("Tanque queda sin vida luego de dos disparos",() => {
        const tanque2 = new Tanque("Tanque2");
        const tanque1 = new  Tanque("Tanque1");
        tanque1.disparar(tanque2);
        tanque1.disparar(tanque2);

        expect(tanque2.estaVivo).toBe(false);
});
    test("Tanque con escudo queda con vida luego de un disparo", ()=>{
        var tanque1 = new Tanque("Tanque1");
        var tanque2 = new Tanque("Tanque2");
        tanque1.disparar(tanque2);
        expect(tanque2.estaVivo).toBe(true);

    });
        
    
});

describe("Disparos entre todos", ()=>{
    test("Tanque puede disparar a soldado y soldado muere", ()=> {
        var soldado1 = new Soldado("Soldado1");
        var tanque1 = new Tanque("Tanque1");

        tanque1.disparar(soldado1);
        expect(soldado1.estaVivo).toBe(false);
    });

    test("Tanque puede disparar a tanque y tanque pierde vida", ()=> {
        var tanque1 = new Tanque("Tanque1");
        var tanque2 = new Tanque("Tanque2");

        tanque2.disparar(tanque1);
        expect(tanque1.estaVivo).toBe(true);
        tanque2.disparar(tanque1);
        expect(tanque1.estaVivo).toBe(false);
    });

    test("Tanque puede disparar a buque y buque pierde vida", ()=> {
        var tanque1 = new Tanque("Tanque1");
        var buque1 = new Buque("Buque1");

        tanque1.disparar(buque1);
        expect(buque1.estaVivo).toBe(true);
        tanque1.disparar(buque1);
        expect(buque1.estaVivo).toBe(true);
        tanque1.disparar(buque1);
        expect(buque1.estaVivo).toBe(false);
    });

});