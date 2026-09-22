import {describe, test, expect} from "vitest";
import {Soldado} from "../src/Soldado.js"
import {Tanque} from "../src/Tanque.js"
import {Buque} from "../src/Buque.js"
import {Escudo} from "../src/Escudo.js"


describe ("Tests de disparos", () => {

    test("Soldado se encuentra vivo", () => {
        var soldado = new Soldado("Soldado");

        expect(soldado.estaVivo).toBe(true);

    }

    )

    test("Soldado muere de un disparo", () => {
    var soldado1 = new Soldado("Soldado1");
    var soldado2 = new Soldado("Soldado2");

    soldado1.disparar(soldado2);

    expect(soldado2.estaVivo).toBe(false);
});

});

describe ("Soldado con escudo", () =>{
    test("Soldado con escudo muere de dos disparos", ()=> {
        var soldado1 = new Soldado("Soldado1");
        var soldado2 = new Soldado ("Soldado2");
        var escudo1 = new Escudo(100);

        expect(soldado1.estaVivo).toBe(true);
        expect(soldado2.estaVivo).toBe(true);

        soldado2.disparar(soldado1);
        expect(escudo1.calculoPorcentaje).toBe(75);
    })


})
    

