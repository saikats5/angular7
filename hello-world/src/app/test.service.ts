import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }
  getDetails(){
    return [
      {id: '1', name: 'Saikat'},
      {id: '2', name: 'John'},
      {id: '3', name: 'Martin'}
    ]
  }
}
