import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Load } from '../../state/place.actions';
import { Observable } from 'rxjs';
import { Place } from '../../place';

@Component({
  selector: 'cc-placelist-container',
  templateUrl: './placelist-container.component.html',
  styleUrls: ['./placelist-container.component.css']
})
export class PlacelistContainerComponent implements OnInit {
  places$: any;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(new Load());
    this.places$ = this.store.pipe(select('places')) as Observable<Place[]>;
  }

}
