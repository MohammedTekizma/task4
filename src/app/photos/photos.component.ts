import { Component } from '@angular/core';
import { AppServices } from '../app.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent {
  constructor(private appServices: AppServices){}
  photos:any;
  ngOnInit(){
    this.appServices.fetchPhotoSer().subscribe((data: object)=>{
      this.photos = data;
    })
      // console.log(this.posts);
  }
}
