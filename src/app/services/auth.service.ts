import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username : string, password: string) {
      if(username=='rush' && password=='1243') return 200;
      else return 404;
  }
}
