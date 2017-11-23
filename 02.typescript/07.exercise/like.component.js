"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LikeComponent = (function () {
    function LikeComponent(_numLikes, _state) {
        this._numLikes = _numLikes;
        this._state = _state;
    }
    Object.defineProperty(LikeComponent.prototype, "numLikes", {
        get: function () {
            return this._numLikes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LikeComponent.prototype, "state", {
        get: function () {
            return this._state;
        },
        enumerable: true,
        configurable: true
    });
    LikeComponent.prototype.like = function () {
        this._numLikes += (this._state) ? -1 : +1;
        this._state = !this._state;
    };
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
