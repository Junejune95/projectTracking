import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TableFilter, User, UserList } from 'app/core/interfaces/interface-index';
import { TableListService } from 'app/core/services/list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  resultsLength = 0;

  
  displayedColumns: string[] = ['username', 'email', 'phoneNumber'];
  displayedLabel: string[] = ['User Name', 'Email', 'Phone Number'];

  public users?: User[];
  public sub?:Subscription;
  dataSource = new MatTableDataSource<User>(this.users);

  constructor(private _service: TableListService) { }

  ngOnInit(): void {
    this.getUserList();
  }


  getUserList() {
    this.sub=this._service.getUserList('hello')
    .subscribe((res)=>{
      console.log(res);
      this.resultsLength=res.totalCount;
      this.dataSource.data=res.users as User[];
    })
  }



}
