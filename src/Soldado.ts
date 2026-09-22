import {Tanque} from "./Tanque.js"
import {Buque} from "./Buque.js"

export class Soldado {
    private _nombre: string;
    private _estaVivo: boolean;
    private _vida: number;
    private _escudo: Boolean;

    constructor(nombre: string){
        this._nombre = nombre;
        this._vida = 1;
        this._estaVivo = true;
        this._escudo = false;
    }

    public disparar(blanco:Soldado|Tanque| Buque): void{
        blanco.recibirDisparo();

    }
    public recibirDisparo(): void{
        this._estaVivo = false;
    }

    get estaVivo(): boolean {
        return this._estaVivo;

    }
    set estaVivo(valor: boolean){
        this._estaVivo = valor
    }

    //public disparar(blanco:Soldado): void{
        //blanco.recibirDisparo();
    //}


}