import {Soldado} from "./Soldado"

export class Tanque{
    private _nombre: string;
    private _vida: number;
    private _estaVivo: boolean;

    constructor(nombre: string,){
        this._nombre = nombre;
        this._vida = 2;
        this._estaVivo = true;
    }

    public disparar(blanco:Soldado): void{
        blanco.recibirDisparo();
    }
    public recibirDisparo(): void{
        this._vida(this.vida()-1)
    }

    set estaVivo(valor: boolean){
        this._estaVivo = valor
    }

    get estaVivo(): boolean {
        return this._estaVivo;
    }


}

}