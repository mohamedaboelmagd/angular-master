import { GithubService } from './../services/github.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  users: any[];

  constructor(private service: GithubService) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe(users => this.users = users);
  }

}
