import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Details } from './dataInterface';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private _url: string = '../assets/dummyData1.json';

  constructor(private http: HttpClient) { }
  getDetails(): Observable<Details[]>{
    return this.http.get<Details[]>(this._url)
  }
}
