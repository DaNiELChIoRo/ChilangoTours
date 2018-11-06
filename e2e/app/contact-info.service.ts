import { Injectable } from '@angular/core';

import { Telephone } from '../../src/app/Telephone';

import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactInfoService {

  telephones: Telephone[];

  private _url:string = "https://chilangotours.com/api";

  constructor(  private _http: HttpClient ) { }

  getTelephone(): Observable<Telephone[]>{
    return this._http.get<Telephone[]>(`${this._url}/list`).pipe(
      map((res) => {
        this.telephones = res['data'];
        return this.telephones;
      }),
      catchError(this.handleError));

  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }


}
