import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
comments: any;
  constructor(http: HttpClient) {
    http.get('https://jsonplaceholder.typicode.com/comments').subscribe(redirect => {
      this.comments = redirect;
    });
  }

  ngOnInit() {
  }

}
