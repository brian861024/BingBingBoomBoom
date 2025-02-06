import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {

  title = '會員登入';
  username = '';
  password = '';

  confirm(para: MouseEvent) {

    if (!(this.username || this.password)) {
      this.showError();
      return;
    } else  {
      alert('登入成功!');
    }
  }

    noUsername=false;
    noPassword=false;

showError() {
    if (!this.username) {
        this.noUsername = true;
    } else  {
        this.noUsername = false;
    }
    if (!this.password) {
      this.noPassword = true;
  } else  {
    this.noPassword= false;
  }

}

  }
