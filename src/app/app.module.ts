import { PlacesModule } from './places/places.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//NGRX
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'Plunch',
      maxAge: 15
    }),

    PlacesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
