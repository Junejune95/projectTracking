import { Component, OnInit } from '@angular/core';
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
  displayedColumns: string[] = ['username', 'email', 'phoneNumber'];
  public tableFilter: TableFilter = {
    page: 1,
    limit: 20,
    sortColumn: 'createdDate',
    sortDirection: 'desc'
  }

  public users?: User[];
  public sub?:Subscription;
  dataSource = new MatTableDataSource<User>(this.users);
  
  constructor(private _service: TableListService) { }

  ngOnInit(): void {
    this.getUserList();
  }


  getUserList() {
    this.sub=this._service.getUserList(this.tableFilter)
    .subscribe((res)=>{
      console.log(res);
      this.dataSource.data=res.users as User[];
    })
  }



}
