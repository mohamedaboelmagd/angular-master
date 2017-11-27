import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  form: FormGroup;

  constructor(private service: PostService) {
  }

  ngOnInit() {
    this.service.getPosts()
      .subscribe(response => {
        this.posts = response.json();
      }, error => {
        alert('An unexpected error occured');
        console.log(error);
      });
  }

  createPost(input: HTMLInputElement) {
    const post = { title: input.value };
    input.value = '';
    this.service.createPost(post)
      .subscribe(response => {
        post['id'] = response.json().id;
        this.posts.splice(0, 0, post);
      }, (error: Response) => {
        if ( error.status === 400 ){
          this.form.setErrors(error.json());
        }else {
          alert('An unexpected error occured');
          console.log(error);
        }
      });
  }

  updatePost(post) {
    this.service.updatePost(post)
      .subscribe(response => {
        console.log(response.json());
      }, error => {
        alert('An unexpected error occured');
        console.log(error);
      });
  }

  deletePost(post) {
    this.service.deletePost(325)
      .subscribe(response => {
        const index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }, (error: Response) => {
        if (error.status === 404) {
          alert('This post is already deleted');
        }else {
          alert('An unexpected error occured');
          console.log(error);
        }
      });
  }

}
