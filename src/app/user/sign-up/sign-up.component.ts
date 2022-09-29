import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SignUp } from 'src/interface/signup';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signup:SignUp ={
    firstName: '',
    lastName: '',
    email:'',
    password:'',
    confirmPassword:''
  }

  signUpForm : FormGroup
  constructor(private fb : FormBuilder, private userService : UserService) { 
    this.signUpForm = this.fb.group({
      "firstName" : new FormControl('', [Validators.required]),
      "lastName" : new FormControl('', [Validators.required]),
      "email" : new FormControl('', [Validators.required, Validators.email]),
      "password" : new FormControl('', [Validators.required]),
      "confirmPassword" : new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  signUp(){
    this.userService.signUp(this.signUpForm.value).subscribe(() => {
      alert("Sign Up Successfully")
    });
  }

}
