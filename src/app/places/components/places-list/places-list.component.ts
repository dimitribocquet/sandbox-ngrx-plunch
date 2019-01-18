import { Place } from './../../place';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cc-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.css']
})
export class PlacesListComponent implements OnInit {
  @Input() places: Place[];

  constructor() { }

  ngOnInit() {

  }

}
