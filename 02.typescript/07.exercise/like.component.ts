export class LikeComponent{
    constructor(private _numLikes: number, private _state: boolean) {

    }

    get numLikes() {
        return this._numLikes;
    }
    get state() {
        return this._state;
    }

    like(){
        this._numLikes += (this._state)? -1 : +1;
        this._state = !this._state;
    }
}