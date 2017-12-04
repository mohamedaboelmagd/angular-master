import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireList } from 'angularfire2/database/interfaces';
import 'rxjs/add/operator/do';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses$: Observable<any[]>;
  course$;
  author$;

  constructor(private db: AngularFireDatabase) {
    this.courses$ = db.list('/courses').snapshotChanges()
    .map(snap => snap.map(course => {
      return { $key: course.key, value: course.payload.val()};
    }));
    this.course$ = db.object('/courses/1').valueChanges();
    this.author$ = db.object('/authors/1').valueChanges();
    this.courses$.do(console.log).subscribe();
  }

  add(course: HTMLInputElement) {
    this.db.list('/courses').push(course.value);
    // this.db.list('/courses').push({
    //   name: course.value,
    //   student: 1000,
    //   isPremium: true
    // });
    course.value = '';
  }

  update(course) {
    this.db.object('/courses/' + course.$key)
        // .set(course.value + ' Updated');
        .update({
          name: course.value.name ? course.value.name + ' Updated' : course.value + ' Updated'
        });
  }

  delete(course) {
    this.db.object('/courses/' + course.$key)
        .remove()
        .then(x => console.log('Deleted'));
  }
}
