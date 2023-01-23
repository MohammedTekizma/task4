import { Component } from '@angular/core';
import { AppServices } from '../app.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
  constructor(private appServices: AppServices){}
  comments:any;
  ngOnInit(){
    this.appServices.fetchCommentSer().subscribe((data: object)=>{
      this.comments = data;
    })
      // console.log(this.posts);
  }
}
