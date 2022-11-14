import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  ForgotForm!: FormGroup;
  title='FormValidation'
  submitted=false;
 
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(){
   this.ForgotForm=this.formBuilder.group({
   fct_email:['',[Validators.required,Validators.email]],
   })
  }

  onSubmit(){
    this.submitted=true;
    console.log("oke")
    if(this.ForgotForm.invalid){
      console.log("oke babe")
      return;
    }
    else {
      document.getElementById("test-navigate").click()
    }
  }


  unSubmit(){
    this.submitted=false;
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

