import {Buque} from "./Buque.js";
import {Soldado} from "./Soldado.js"
import type { Escudo } from "./Escudo.js";

export class Tanque {
    private _nombre: string;
    private _vida: number;
    private _estaVivo: boolean;
    private _escudo: boolean;

    constructor(nombre: string) {
        this._nombre = nombre;
        this._vida = 2;
        this._estaVivo = true;
        this._escudo = false;
    }

    public disparar(blanco: Buque|Soldado|Tanque): void {
        blanco.recibirDisparo();
    }

    public recibirDisparo(): void {
        this._vida -= 1;
        this._estaVivo = this._vida > 0;
    }

    set estaVivo(valor: boolean) {
        this._estaVivo = valor;
    }

    get estaVivo(): boolean {
        return this._estaVivo;
    }

    tomarEscudo(escudo: Escudo){
        this._escudo = true;

    }
}