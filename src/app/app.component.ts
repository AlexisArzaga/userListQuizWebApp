import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from './Helper/constants';
import { User } from './Models/user';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { BlockUiTemplateComponent } from './sharedModule/block-ui-template/block-ui-template.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @BlockUI('main-loader') blockUI: NgBlockUI;
  public blockUiTemplateComponent = BlockUiTemplateComponent;
  public loaderMessage: string = "loading test";
  title = 'userListQuizWebApp';

  constructor(private router: Router) {

    // if (this.isUserlogin) {
    //  // this.router.navigate(["/user-management"]);
    // }
    if(this.isUserlogin && this.isAdmin){
      this.router.navigate(["/adminLayout"]);
    }

    if(this.isUserlogin && this.isEditor){
      this.router.navigate(["/editorLayout"]);
    }

    if(this.isUserlogin && this.isViewer){
      this.router.navigate(["/viewerLayout"]);
    }
  }
  onLogout() {
    localStorage.removeItem(Constants.USER_KEY);
  }

  get isUserlogin() {
    const user = localStorage.getItem(Constants.USER_KEY);
    return user && user.length > 0;
  }

  get user(): User {
    return JSON.parse(localStorage.getItem(Constants.USER_KEY)) as User;
  }
  
  get isAdmin(): boolean {
    return this.user.roles.indexOf('admin') > -1;
  }

  get isEditor(): boolean {
    return this.user.roles.indexOf('editor') > -1;
  }

  get isViewer(): boolean {
    return this.user.roles.indexOf('viewer') > -1;
  }

}
