import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../Models/user';
import { Constants } from '../Helper/constants';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { BlockUiTemplateComponent } from '../sharedModule/block-ui-template/block-ui-template.component';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @BlockUI('user-loader') blockUI: NgBlockUI;
  public blockUiTemplateComponent = BlockUiTemplateComponent;
  public loaderMessage: string = "loading test";
  public userList: User[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser() {
    this.blockUI.start();
    this.userService.getAllUser().subscribe((data: User[]) => {
      this.userList = data;
      this.blockUI.stop();
    }, () => {
      this.blockUI.stop();
    })
  }

  exportexcel(): void
  {
    this.blockUI.start();
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, 'ExcelSheet.xlsx');
    this.blockUI.stop();

  }

  get user(): User {
    return JSON.parse(localStorage.getItem(Constants.USER_KEY)) as User;
  }
  
  get isAdmin(): boolean {
    return this.user.roles.indexOf('admin') > -1;
  }

  get isViewer(): boolean {
    return this.user.roles.indexOf('viewer') > -1;
  }

}
