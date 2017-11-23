import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CoursesComponent } from 'app/courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from 'app/courses.service';
import { EmailService } from 'app/email.service';
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CoursesService, EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
