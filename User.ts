export default class User {
    private _username: string;
    private _password: string;
    private _playlists: string;
    private _albums: string;
    
    constructor(username: string, password: string, playlist: string, albums: string) {
        this._username = username;
        this._password = password;
        this._playlists = playlist;
        this._albums = albums;
    }

}

