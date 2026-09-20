import {Soldado} from "./Soldado"
import {Tanque} from "./Tanque"


export class Buque {
    private _numero;
    private _vida = 10;

    constructor(numero: string){
        this._numero = numero;
    }

    public disparar(blanco: Soldado):void{
        blanco.recibirDisparo();
    }

    public recibirDisparo(): void {
        this._vida = this._vida - 1;
    }

    get vida(): number{
        return this._vida;
    }

}