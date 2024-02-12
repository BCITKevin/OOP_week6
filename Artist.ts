export default class Artist {
    
    private _name: string;
    // private _albums: string;

    constructor(name: string) {
        this._name = name;
    }

    get artist(): string {
        return this._name;
    }
}