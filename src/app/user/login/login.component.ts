import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginModel = {
    userName: "",
    password: ""
  }

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
  }

  login(loginForm:NgForm){
    this.userService.loginService(loginForm.value).subscribe(d=>{
      localStorage.setItem("token", d["jwt"]);
      this.router.navigateByUrl("gallery");
    })
  }

}
