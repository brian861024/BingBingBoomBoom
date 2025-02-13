import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {

//   title = '會員登入';
//   username = '';
//   password = '';

//   confirm(para: MouseEvent) {

//     if (!(this.username || this.password)) {
//       this.showError();
//       return;
//     } else {
//       alert('登入成功!');
//     }
//   }

     noUsername = false;
     noPassword = false;

// showError() {
//     if (!this.username) {
//         this.noUsername = true;
//     } else  {
//         this.noUsername = false;
//     }
//     if (!this.password) {
//       this.noPassword = true;
//   } else  {
//     this.noPassword= false;
//   }

// }
title = '會員登入';

user = {
  account: "",
  password: ""
};



confirm(para: MouseEvent) {
  this.showError();

  // 如果帳號或密碼為空，則顯示錯誤訊息
  if (!(this.user.account && this.user.account)) {
    alert('請輸入完整的帳號和密碼');
    return;
  } else {
    alert('登入成功!');
  }
}

showError() {
  // 檢查帳號是否為空
  this.noUsername = this.user.account.trim() === "";
console.log(this.noUsername);
  // 檢查密碼是否為空
  this.noPassword = this.user.password.trim() === "";
}

}
