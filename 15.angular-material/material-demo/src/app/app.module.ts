import { MatComponentsModule } from './mat-components.module';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Part1Component } from './part1/part1.component';
import { Part2Component } from './part2/part2.component';
import { Part3Component } from './part3/part3.component';
import { EditCourseComponent } from './edit-course/edit-course.component';

@NgModule({
  declarations: [
    AppComponent,
    Part1Component,
    Part2Component,
    Part3Component,
    EditCourseComponent
  ],
  entryComponents: [
    EditCourseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
