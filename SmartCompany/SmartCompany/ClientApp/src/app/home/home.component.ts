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

  constructor(private s: PersonService) {}

  ngOnInit() {
    this.s.getPersons().subscribe((e:IPerson) => {
      this.persons = e;
    });
  }

  listItems = [
    { linkTitle: 'Home 1', link: '/home-a' },
    { linkTitle: 'Home 2', link: '/home-b' },
    { linkTitle: 'Home 3', link: '/home-c' },
    { linkTitle: 'Home 4', link: '/home-d' },
    { linkTitle: 'Home 5', link: '/home-e' },
  ];

  handleClick(selectedItem) {
    
  }

}
