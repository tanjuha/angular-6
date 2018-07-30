import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 users: any;
  constructor(http: HttpClient) {
    http.get('https://jsonplaceholder.typicode.com/users').subscribe(redirect => {
      this.users = redirect;
    });
  }

  ngOnInit() {
  }

}
