import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable()
export class GithubService extends DataService {

  constructor(http: Http) {
    super('https://api.github.com/users/mosh-hamedani/followers', http);
  }

}
