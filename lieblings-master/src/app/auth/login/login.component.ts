import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'll-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  LoginForm!:FormGroup
  title = 'FormValidation';
  submitted=false;
  passType: string = 'password';

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.LoginForm=this.formBuilder.group({
      fct_password:[],
      fct_email:['',[Validators.email]],
    })
  }

  onSubmit(){
    this.submitted=true; 
   // console.log(this.LoginForm)
    if(this.LoginForm.invalid){
      console.log("hehe")
      return
    }
    else alert("Success")
  }

  unSubmit(){
    this.submitted=false;
  }

  changePasswordType(){
    const eyeDisable = document.querySelector(".icon-eye-hidden")
    if (eyeDisable.classList.contains("disable")) 
      eyeDisable.classList.remove("disable")
    else eyeDisable.classList.add("disable")
       
    console.log("ok")
    if(this.passType== 'password'){
      this.passType = 'text'
    }

    else{
      this.passType = 'password'
    }
  }






  public account = {
    email: <string>null,
    password: <string>null
  };
  email = '';
  password = '';
  confirmPassword = '';
  valid = {
    email: true,
    password: true,
  };

  public barLabel: string = "Password strength:";
  public myColors = ['#DD2C00', '#FF6D00', '#FFD600', '#AEEA00', '#00C853'];
  public thresholds = [90, 75, 45, 25];
  public strengthLabels = ['(Useless)', '(Weak)', '(Normal)', '(Strong)', '(Great!)'];

}

