import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class TemperatureService {

  constructor(private httpClient: HttpClient) { }

  public getTemperatures(): Observable<any[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.get<any[]>('http://localhost:5000/temperature', { headers: headers })
      .pipe(
        catchError((error) => {
          console.log('GET: Error retrieving temperatures', error);
          return throwError(error);
        }
        ));
  }
}
