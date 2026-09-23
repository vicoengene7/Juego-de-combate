export class Escopeta {
    private _municiones: number;
    private _tieneMuniciones: boolean
    private _daño: number;

    constructor(municiones: number){
        this._municiones = municiones;
        this._daño = 1;
        this._tieneMuniciones = true;
    }

    get hayMuniciones(): boolean{
        return this._tieneMuniciones;
    }
    
    public disparar(): number{
       const puedeDisparar = this._municiones > 0;
        this._municiones -= puedeDisparar ? 1 : 0;
        this._tieneMuniciones = this._municiones > 0;

        return puedeDisparar ? this._daño : 0;
    }

}