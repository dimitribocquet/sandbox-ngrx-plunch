import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//NGRX
import { StoreModule } from '@ngrx/store';

import { PlacesListComponent } from './components/places-list/places-list.component';
import { PlacesAddComponent } from './components/places-add/places-add.component';
import { PlaceaddContainerComponent } from './containers/placeadd-container/placeadd-container.component';

@NgModule({
  declarations: [
    PlacesListComponent,
    PlacesAddComponent,
    PlaceaddContainerComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('places', {})
  ],
  exports:[
    PlacesListComponent,
    PlacesAddComponent
  ]
})
export class PlacesModule { }
