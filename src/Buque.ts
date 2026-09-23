import {Tanque} from "./Tanque.js";
import {Soldado} from "./Soldado.js";
import {Escudo} from "./Escudo.js";

export class Buque {
    private _nombre: string;
    private _vida: number;
    private _estaVivo: boolean;
    private _escudo: boolean;

    constructor(nombre: string){
        this._nombre = nombre;
        this._vida = 3;
        this._estaVivo = true;
        this._escudo = false;

    }

    public disparar(blanco: Buque|Soldado|Tanque):void{
        blanco.recibirDisparo();
    }

    public recibirDisparo(): void {
        this._vida = this._vida - 1;
        this._estaVivo = this._vida > 0;
    }

    get estaVivo(): boolean{
        return this._estaVivo;
    }

    set estaVivo(valor: boolean){
        this._estaVivo = valor;
        
    }

    tomarEscudo(escudo: Escudo): void{
        this._escudo = true;

    }



}