import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router/src/router_state';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(private route: ActivatedRoute, private service: GithubFollowersService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {

    });
    this.route.queryParamMap.subscribe(params => {

    });
    this.service.getAll()
      .subscribe(followers => this.followers = followers);
  }
}
