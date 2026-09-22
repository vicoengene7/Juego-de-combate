import {Soldado} from "./Soldado.js"
import {Tanque} from "./Tanque.js"


export class Buque {
    private _nombre: string;
    private _vida: number;
    private _estaVivo: boolean;

    constructor(nombre: string){
        this._nombre = nombre;
        this._vida = 3;
        this._estaVivo = true;

    }

    public disparar(blanco: Soldado):void{
        blanco.recibirDisparo();
    }

    public recibirDisparo(): void {
        this._vida = this._vida - 1;
    }

    get estaVivo(): boolean{
        return this._estaVivo;
    }

    set estaVivo(valor: boolean):{
        
    }


}