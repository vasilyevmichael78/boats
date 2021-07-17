import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Boat } from '@app/_models';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BoatsService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Boat[]> {

    return this.httpClient.get<Boat[]>(`${environment.apiUrl}/boats`);
  }

  addBoat(boat: any): Observable<any> {

    return this.httpClient.post(`${environment.apiUrl}/boats`, boat, {observe: 'response'});
  }

}
