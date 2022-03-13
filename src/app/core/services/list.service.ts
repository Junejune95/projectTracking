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

    getUserList(search:string) {
        let url: string;
        if (search) url = this.baseUrl + "users?search=" + 'filter.search';
        else
    
          url =
            this.baseUrl +
            "users";
    
        return this.http.get<UserList>(url).pipe(map((obj) => obj));
      }
}