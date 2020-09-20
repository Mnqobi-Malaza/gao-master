import {  Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from '../models/employee-model';


@Injectable()
export class PersonService {

  constructor(private _http: HttpClient) { }

  getPersons() {
    return this._http.get("api/Home/Persons");
  }

  getEmployeeDetails(id) {
    return this._http.get("api/Home/Employee/"+ id);
  }
}
