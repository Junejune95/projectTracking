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
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  displayedColumns: string[] = ['username', 'email', 'phoneNumber'];
  public tableFilter: TableFilter = {
    page: 1,
    limit: 10,
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

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    
  }

  getUserList() {
    this.sub=this._service.getUserList(this.tableFilter)
    .subscribe((res)=>{
      console.log(res);
      this.resultsLength=res.totalCount;
      this.dataSource.data=res.users as User[];
    })
  }



}
