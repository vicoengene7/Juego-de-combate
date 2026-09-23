import {expect, test, describe} from "vitest";
import {Pistola} from "../src/Pistola.js";

describe("Municiones", () =>{
    test("Pistola queda sin municiones", () => {
        const pistola = new Pistola(2);
        expect(pistola.hayMuniciones).toBe(true);
        pistola.disparar();
        expect(pistola.hayMuniciones).toBe(true);
        pistola.disparar();
        expect(pistola.hayMuniciones).toBe(false);

    });

});