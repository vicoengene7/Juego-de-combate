import {describe, test, expect} from "vitest";
import {Soldado} from "../src/Soldado"


describe ("Tests de disparos", () => {

    test("Soldado muere de un disparo", () => {
    var soldado1 = new Soldado("Soldado1");
    var soldado2 = new Soldado("Soldado2");

    soldado1.disparar(soldado2);

    expect(soldado2.estaVivo).toBe(false);
});

    test("Tanque queda sin vida de dos disparos", () => {
    const tanque = new Soldado("Soldado1");
    const soldado2 = new Soldado("Soldado2");

    tanque.disparar(soldado2);

    expect(soldado2.estaVivo).toBe(false);
});
    

})