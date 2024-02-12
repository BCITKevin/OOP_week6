export default class Song {
    private _title: string;

    constructor(title: string) {
        this._title = title;
    }

    get title(): string {
        return this._title;
    }
}