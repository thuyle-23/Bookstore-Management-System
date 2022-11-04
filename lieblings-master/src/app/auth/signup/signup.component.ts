import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'll-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
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
  constructor() { }

  ngOnInit(): void {
  }

}
