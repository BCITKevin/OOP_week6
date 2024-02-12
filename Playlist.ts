import Song from "./Song"
import Album from "./Album"

export default class playlist {
    private _name: string;
    private _songs: Song[];

    constructor(name: string, songs: Song) {
        this._name = name;
        this._songs = [];
    }

    addAlbum(tracks: Song[]) {
        // I will be loop through all the tracks, so I get the all the tracks, and push it into songs to export it to index.ts file.
        this._songs.push(tracks)
    }

    // make getter to make access to index.ts
}