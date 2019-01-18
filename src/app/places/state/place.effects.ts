import { PlaceActionTypes, LoadSuccess, LoadFail } from './place.actions';
import { Action } from '@ngrx/store';
import { PlaceService } from './../place.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class PlaceEffects {
    constructor(
        private placeService: PlaceService,
        private actions$: Actions
    ) {

    }

    @Effect()
    loadPlaces$: Observable<Action> = this.actions$.pipe(
        ofType(PlaceActionTypes.Load),
        mergeMap(action => {
            console.log('action in @Effect', action);
            return this.placeService.getPlaces().pipe(
                map(places => (new LoadSuccess(places))),
                catchError(error => of(new LoadFail(error)))
            );
        })
    )
}