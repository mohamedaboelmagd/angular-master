import { GithubService } from './services/github.service';
import { AppErrorHandler } from './common/validator/app-error-handler';
import { PostService } from './services/post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { GithubComponent } from './github/github.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    GithubComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [  PostService,
                { provide: ErrorHandler, useClass: AppErrorHandler },
                GithubService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
