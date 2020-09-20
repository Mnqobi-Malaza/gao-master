import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';
import { IPerson } from '../models/person-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit{
  selectedItem = '';
  persons: IPerson;
 
  listItems = [
    { id: 1, name: 'Mnqobi', surname: 'Malaza', dateOfBirth: '1991-01-03'},
    { id: 2, name: 'Alper', surname: 'Tlou', dateOfBirth: '1991-01-03' },
   
  ];

  constructor(private s: PersonService) {}

  ngOnInit() {
    this.s.getPersons().subscribe((e:IPerson) => {
      this.persons = e;
    });
  }

  handleClick(selectedItem) {
    
  }

}
