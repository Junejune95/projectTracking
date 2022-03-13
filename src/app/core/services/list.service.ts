import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TableFilter,UserList } from "app/core/interfaces/interface-index";
import { environment } from "environments/environment";
import { map } from "rxjs";


@Injectable({
    providedIn: 'root'
  })
  
  
  export class TableListService {
    private baseUrl = environment.apiUrl + "/api/v1/";
  
    constructor(private http: HttpClient) {
  
    }

    getUserList(filter: TableFilter) {
        let url: string;
        if (filter.search) url = this.baseUrl + "users?search=" + filter.search;
        else
    
          url =
            this.baseUrl +
            "users?page=" +
            filter.page +
            "&limit=" +
            filter.limit +
            "&sortColumn=" +
            filter.sortColumn +
            "&sortDirection=" +
            filter.sortDirection;
    
        return this.http.get<UserList>(url).pipe(map((obj) => obj));
      }
}