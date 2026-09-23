import {describe, test, expect} from "vitest";
import {Escudo} from "../src/Escudo.js"

describe("Porcentaje de escudo", () =>{
    test("El escudo con 50% disminuye el daño a la mitad", () => {
        var escudo1 = new Escudo(50);
        var daño = escudo1.calculoDeDaño(1);
        expect(daño).toBe(0.5);
    
    });


});