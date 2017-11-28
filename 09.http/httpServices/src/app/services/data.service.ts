import { BadInput } from './../common/validator/bad-input';
import { NotFoundError } from './../common/validator/not-found-error';
import { AppError } from './../common/validator/app-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/retry';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {

  constructor(private url: string, private http: Http) { }

  getAll() {
    return this.http.get(this.url)
        .map(response => response.json())
        .catch(this.handleError);
  }

  create(resource) {
    // return Observable.throw(new AppError());
    return this.http.post(this.url, JSON.stringify(resource))
        .map(response => response.json())
        .catch(this.handleError);
  }

  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true}))
        .map(response => response.json())
        .catch(this.handleError);
  }

  delete(id) {
    // return Observable.throw(new AppError());
    return this.http.delete(this.url + '/' + id)
        .map(response => response.json())
        // .toPromise()
        .retry(3)
        .catch(this.handleError);
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return Observable.throw(new BadInput(error.json()));
    }
    if (error.status === 404) {
      return Observable.throw(new NotFoundError());
    }
    return Observable.throw(new AppError());
  }

}
