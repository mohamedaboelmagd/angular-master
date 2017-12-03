import { LikeComponent } from "./like.component";

let post = new LikeComponent(2, false);
post.like();
console.log(post.numLikes, post.state);
//tsc *.ts --target ES5 && node main.js