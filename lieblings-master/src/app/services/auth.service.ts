import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  baseServerUrl = "https://localhost:44381/api/";

  registerUser(){
    this.http.post(this.baseServerUrl + 'user', null)
  }
}

