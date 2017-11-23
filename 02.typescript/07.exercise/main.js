"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_component_1 = require("./like.component");
var post = new like_component_1.LikeComponent(2, false);
post.like();
console.log(post.numLikes, post.state);
