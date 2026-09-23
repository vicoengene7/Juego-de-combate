import {Escudo} from "./Escudo.js"
import {Buque} from "./Buque.js";
import {Tanque} from "./Tanque.js";

export class Soldado {
    private _nombre: string;
    private _estaVivo: boolean = true;
    private _vida: number = 1;
    private _escudo: Boolean = false;
    private _pistola: Boolean = false;

    constructor(nombre: string){
        this._nombre = nombre;
        this._vida = 1;
        this._estaVivo = true;
        this._escudo = false;
        this._pistola = false;
    }

    public disparar(blanco: Buque|Soldado|Tanque): void{
        blanco.recibirDisparo();

    }

    public recibirDisparo(): void{
        !this._escudo && (this._estaVivo = false);
    }

      get estaVivo(): boolean {
        return this._estaVivo;

    }
    set estaVivo(valor: boolean){
        this._estaVivo = valor;
    }

    tomarEscudo(escudo: Escudo): void {
        this._escudo = true;
    }


}