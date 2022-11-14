import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'll-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  SingupForm!: FormGroup;
  title= 'FormValidation'
  submitted=false;
  
 
  constructor(private formBuilder: FormBuilder) { }

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


  ngOnInit():void {
    
    this.SingupForm = this.formBuilder.group({
      fct_email:['',[Validators.required,Validators.email]],
      fct_password:['',Validators.required],
      fct_conpassword:['',Validators.required],
    })
  }

  unSubmit(){
    this.submitted = false;
    const error_message = document.querySelector(".errors-message")
    error_message.classList.remove("visible")
  }

  onSubmit(){

    const checkbox = document.getElementById(
      'remember_me',
    ) as HTMLInputElement | null;
    
    if (checkbox?.checked) {
      const check_message = document.querySelector(".check-message")
      check_message.classList.remove("visible")
      console.log('Checkbox is checked');
    } else {
      const check_message = document.querySelector(".check-message")
      check_message.classList.add("visible")
      console.log('Checkbox is NOT checked');
    }
    this.submitted = true;
    var pass1 = (<HTMLInputElement>document.getElementById("password")).value;
    var pass2 = (<HTMLInputElement>document.getElementById("conpassword")).value;
    console.log(pass1,pass2)
    const error_message = document.querySelector(".errors-message")
    if(pass1==pass2)
    {
      error_message.classList.add("disable")
    }
    if(pass1!==pass2)
    {
      error_message.classList.add("visible")
      return;
    }
    if(this.SingupForm.invalid || !checkbox?.checked ){
      return;
    }
    else
    alert("Success");
  }

  click_checkbox(){
    const checkbox = document.getElementById(
      'remember_me',
    ) as HTMLInputElement | null;
    
    if (checkbox?.checked) {
      const check_message = document.querySelector(".check-message")
      check_message.classList.remove("visible")

    }
  }
}
