import {expect, test, describe} from "vitest";
import {Escopeta} from "../src/Escopeta.js";

describe("Municiones", () =>{
    test("Pistola queda sin municiones", () => {
        const escopeta = new Escopeta(2);
        expect(escopeta.hayMuniciones).toBe(true);

        escopeta.disparar();
        expect(escopeta.hayMuniciones).toBe(true);
        escopeta.disparar();
        expect(escopeta.hayMuniciones).toBe(false);

    });

});