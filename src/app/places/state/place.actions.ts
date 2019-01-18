import { Place } from './../place';
import { Action } from '@ngrx/store';

export enum PlaceActionTypes {
    Load = '[Place] Load',
    LoadSuccess = '[Place] Load Success',
    LoadFail = '[Place] Load Fail',
}

// action creators
export class Load implements Action {
    readonly type = PlaceActionTypes.Load;

    constructor(public payload: any = null) { }
}

export class LoadSuccess implements Action {
    type = PlaceActionTypes.LoadSuccess;

    constructor(public payload: Place[]) { }
}

export class LoadFail implements Action {
    type = PlaceActionTypes.LoadFail;

    constructor(public payload: string) { }
}

export type PlaceActions = Load | LoadSuccess | LoadFail;