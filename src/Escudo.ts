export class Escudo{
    private _porcentaje: number;

    constructor(Porcentaje: number){
        this._porcentaje = Porcentaje
    }

    get porcentaje(): number {
        return this._porcentaje;
    }

    calculoPorcentaje(daño: number): number {
        return daño * (1-this._porcentaje/100);

    }
}