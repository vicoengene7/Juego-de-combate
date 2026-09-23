import {describe, test, expect} from "vitest";
import {Buque} from "../src/Buque.js";
import {Tanque} from "../src/Tanque.js";
import {Soldado} from "../src/Soldado.js";
import {Escudo} from "../src/Escudo.js";
import { TestsNotFoundError } from "vitest/node";

describe("Buque", ()=> {
    test ("Test de vida", ()=> {
        var buque = new Buque("Buque");
        
        expect(buque.estaVivo).toBe(true);

    });
    test("Buque con escudo queda con vida luego de un disparo", () =>{
        var buque1 = new Buque("Buque1");
        var buque2 = new Buque("Buque2");
        var escudo1 = new Escudo(100);

        buque1.disparar(buque2);
        expect(buque2.estaVivo).toBe(true);
    });

});

describe("Disparos entre todos", ()=>{
    test("Buque puede disparar a soldado y soldado muere", ()=> {
        var soldado1 = new Soldado("Soldado1");
        var buque1 = new Buque("Buque1");

        buque1.disparar(soldado1);
        expect(soldado1.estaVivo).toBe(false);
    });

    test("Buque puede disparar a tanque y tanque pierde vida", ()=> {
        var tanque1 = new Tanque("Tanque1");
        var buque1 = new Buque("Buque1");

        buque1.disparar(tanque1);
        expect(tanque1.estaVivo).toBe(true);
        buque1.disparar(tanque1);
        expect(tanque1.estaVivo).toBe(false);
    });

    test("Buque puede disparar a buque y buque pierde vida", ()=> {
        var buque1 = new Buque("Buque1");
        var buque2 = new Buque("Buque2");

        buque2.disparar(buque1);
        expect(buque1.estaVivo).toBe(true);
        buque2.disparar(buque1);
        expect(buque1.estaVivo).toBe(true);
        buque2.disparar(buque1);
        expect(buque1.estaVivo).toBe(false);
    });

});