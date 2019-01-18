import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

//NGRX
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/place.reducers';
import { EffectsModule } from '@ngrx/effects';
import { PlaceEffects } from './state/place.effects';

import { PlacesListComponent } from './components/places-list/places-list.component';
import { PlacesAddComponent } from './components/places-add/places-add.component';
import { PlaceaddContainerComponent } from './containers/placeadd-container/placeadd-container.component';
import { PlacelistContainerComponent } from './containers/placelist-container/placelist-container.component';

@NgModule({
  declarations: [
    PlacesListComponent,
    PlacesAddComponent,
    PlaceaddContainerComponent,
    PlacelistContainerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('places', reducer),
    EffectsModule.forFeature([PlaceEffects])
  ],
  exports:[
    PlaceaddContainerComponent,
    PlacelistContainerComponent
  ]
})
export class PlacesModule { }
