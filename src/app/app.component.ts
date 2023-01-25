import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'task4';
  constructor( private router: Router) {}
  value!:any;
  currentVal!:string;

  updateCurrentVal(val:any) {
    this.currentVal = val;
  }
  navigate(){
    this.router.navigate(['/']).then(() => {
      this.router.navigate(["/",this.currentVal, {foo:this.value}]);
      // this.router.navigate(["/comments", {foo:this.value}], {relativeTo: this.activatedRoute});
      // this.router.navigate(["/todos", {foo:this.value}], {relativeTo: this.activatedRoute});
      // this.router.navigate(["/photos", {foo:this.value}], {relativeTo: this.activatedRoute});
      // this.router.navigate(["/albums", {foo:this.value}], {relativeTo: this.activatedRoute});
    });
/*     this.router.navigate(["/posts", {foo:this.value}], {relativeTo: this.activatedRoute}).then(() =>{
      // this.Todo.ngOnInit();
    }); */
   }
}
