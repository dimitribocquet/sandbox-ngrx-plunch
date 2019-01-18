import { PlaceActions, PlaceActionTypes } from './place.actions';

const initialState = {
    places: [],
    error: ''
}

export function reducer(state = initialState, action: PlaceActions) {
    console.log('action', action);

    switch (action.type) {
        case PlaceActionTypes.LoadSuccess:
            return {
                ...state,
                places: action.payload,
                error: ''
            }

        case PlaceActionTypes.LoadFail:
            return {
                ...state,
                places: [],
                error: action.payload
            }

        default:
            return state;
    }
}