import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  title="會員登入";
username='';
password='';
count=0;
  confirm(para:any){

    if(this.username&&this.password===null){
this.username='666';
    };


  }
}
