export class Escudo{
    private _porcentajeEscudo: number;

    constructor(Porcentaje: number){
        this._porcentajeEscudo = Porcentaje
    }

    get porcentaje(): number {
        return this._porcentajeEscudo;
    }

    calculoDeDaño(daño: number): number {
        return daño * (1-this._porcentajeEscudo/100);

    }
}