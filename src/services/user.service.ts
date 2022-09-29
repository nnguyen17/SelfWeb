import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SignUp } from 'src/interface/signup';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url : string = environment.apiKey+environment.apiControllers.signup

  constructor(private httpClient:HttpClient) { }

  signUp(signup: SignUp) : Observable<any>{
    return this.httpClient.post(this.url, signup);
  }
}
