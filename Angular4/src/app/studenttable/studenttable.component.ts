import {Component} from '@angular/core';

/**
 * @title Basic table
 */
@Component({
  selector: 'Studenttable',
  styleUrls: ['Studenttable.component.css'],
  templateUrl: 'Studenttable.component.html',
})
export class StudenttableComponent {
  displayedColumns = ['position', 'name', 'age', 'class'];
  dataSource = ELEMENT_DATA;
}

export interface Element {
  name: string;
  position: number;
  age: number;
  class: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hanna', age: 14, class: 'Fifth '},
  {position: 2, name: 'Helen', age: 13, class: 'Fourth '},
  {position: 3, name: 'Larry', age: 16, class: 'Sixth '},
  {position: 4, name: 'Ben', age: 11, class: 'Third'},
  {position: 5, name: 'Carl', age: 13, class: 'Fourth'},
  
];