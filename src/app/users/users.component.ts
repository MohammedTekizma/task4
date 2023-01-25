import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppServices } from '../app.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  constructor(private appServices: AppServices,private route :ActivatedRoute ){}
  users:any;
  value = this.route.snapshot.params['foo'];
  ngOnInit(){
    this.value = this.route.snapshot.params['foo'];
    if (this.value != '')
      this.appServices.fetchUserSer(Number(this.value)).subscribe((data: object)=>{
        this.users = data;
      })
    else
      this.appServices.fetchUserSer().subscribe((data: object)=>{
        this.users = data;
      })
      // console.log(this.users);
  }
}
