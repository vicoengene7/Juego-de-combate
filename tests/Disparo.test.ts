import {describe, test, expect} from "vitest";
import {Soldado} from "../src/Soldado.js"
import {Tanque} from "../src/Tanque.js"
import {Buque} from "../src/Buque.js"


describe ("Tests de disparos", () => {

    test("Soldado muere de un disparo", () => {
    var soldado1 = new Soldado("Soldado1");
    var soldado2 = new Soldado("Soldado2");

    soldado1.disparar(soldado2);

    expect(soldado2.estaVivo).toBe(false);
});

    test("Tanque se queda sin vida luego de dos disparos", () => {
    const tanque = new Tanque("Tanque1");
    const tanque2 = new Tanque("Tanque2");

    tanque.disparar(tanque2);

    expect(tanque2.estaVivo).toBe(false);
});
    test("Tanque queda sin vida luego de dos disparos",() => {
        const tanque2 = new Tanque("Tanque2");
        const soldado1 = new  Soldado("Soldado1");
        const soldado2 = new Soldado("Soldado2");
        soldado1.disparar(tanque2);
        soldado2.disparar(tanque2);

        expect(tanque2.estaVivo).toBe(false);
});
        
    
});


