import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
@Injectable()
export class UserService {
  constructor(private http:Http) { 
  }
  

  getUser(){
    return this.http.get('');
  }
  getPost(){
    return this.http.get('');
  }
}
