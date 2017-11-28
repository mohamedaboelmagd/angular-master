import { BadInput } from './../common/validator/bad-input';
import { NotFoundError } from './../common/validator/not-found-error';
import { AppError } from './../common/validator/app-error';
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
    this.service.getAll()
      .subscribe(response => {
        this.posts = response.json();
      });
  }

  createPost(input: HTMLInputElement) {
    const post = { title: input.value };
    input.value = '';
    this.service.create(post)
      .subscribe(response => {
        post['id'] = response.json().id;
        this.posts.splice(0, 0, post);
      }, (error: AppError) => {
        if ( error instanceof BadInput ) {
          this.form.setErrors(error.originalError);
        }else { throw error; } ;
      });
  }

  updatePost(post) {
    this.service.update(post)
      .subscribe(response => {
        console.log(response.json());
      });
  }

  deletePost(post) {
    this.service.delete(325)
      .subscribe(response => {
        const index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }, (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert('This post is already deleted');
        }else { throw error; } ;
      });
  }

}
