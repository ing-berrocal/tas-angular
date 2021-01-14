export class Registro{    
    documento:string;
    fecha:string;
    resultado?: Blob
}

export function getEl() : Registro[]{
    return [{documento:'1000',fecha:'2020-01-01 '}];
}