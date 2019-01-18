import { Place } from './../../place';
import { Load } from './../../state/place.actions';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'cc-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.css']
})
export class PlacesListComponent implements OnInit {
  places$: any;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(new Load());
    this.places$ = this.store.pipe(select('places')) as Observable<Place[]>;
  }

}
