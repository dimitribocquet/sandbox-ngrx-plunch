import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Place } from './place';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  private placesURL = 'http://localhost:4201/api/v1/places';

  constructor(
    private http: HttpClient
  ) {

  }

  getPlaces(): Observable<Place[]> {
    return this.http.get<Place[]>(this.placesURL)
      .pipe(
        tap(places => console.log('PlaceService', places)),
        catchError(this.handleError)
      )
    ;
  }

  handleError(error): Observable<never> {
    return throwError(error.error.message);
  }
}
