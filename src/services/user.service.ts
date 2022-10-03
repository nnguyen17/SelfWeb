import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SignUp } from 'src/interface/signup';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  signUpUrl : string = environment.apiKey+environment.apiControllers.signup
  loginUrl : string = environment.apiKey+environment.apiControllers.login

  constructor(private httpClient:HttpClient) { }

  signUpService(signup: SignUp) : Observable<any>{
    return this.httpClient.post(this.signUpUrl, signup);
  }

  loginService(login: any) : Observable<any> {
    return this.httpClient.post(this.loginUrl, login)
  }
}
