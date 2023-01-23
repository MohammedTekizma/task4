import { Component } from '@angular/core';
import { AppServices } from '../app.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {
  constructor(private appServices: AppServices){}
  albums:any;
  ngOnInit(){
    this.appServices.fetchAlbumSer().subscribe((data: object)=>{
      this.albums = data;
    })
      // console.log(this.posts);
  }
}