import Song from "./Song"

export default class Album {
    private _title: string;
    private _artist: string;
    private _year: number;
    private _tracks: Song[];

    constructor(title: string, artist: string, year: number) {
        this._title = title;
        this._artist = artist;
        this._year = year;
        this._tracks = [];
    }
    
    addTrack(track: Song) {
        this._tracks.push(track);
    }

    get title(): string {
        return this._title;
    }
    
}