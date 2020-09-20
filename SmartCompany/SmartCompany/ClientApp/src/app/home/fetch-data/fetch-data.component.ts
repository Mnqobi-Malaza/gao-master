import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../../services/person.service';
import { IEmployee } from '../../models/employee-model';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent implements OnInit {
  sub;
  id;
  employeeDetails: IEmployee;
 
  listItems = [
    { id: 1, startDate: '2020-02-02', role: 'Enginerr', isActive: true, personId:1 },
    { id: 1, startDate: '2020-02-02', role: 'Enginerr', isActive: true, personId: 2 },

  ];

  constructor(private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private _employees: PersonService) {
   
  }
  
  ngOnInit() {
    this.sub = this._Activatedroute.paramMap.subscribe(params => {
      console.log(params);
      this.id = params.get('id');
    });

    this._employees.getEmployeeDetails(this.id).subscribe((e: IEmployee) => {
      this.employeeDetails = e;

    });
  }


  public onCancel = () => {
    this._router.navigate(['app-home']);
  }
}


