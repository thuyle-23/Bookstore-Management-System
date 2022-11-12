import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'll-dashboard-profile',
  templateUrl: './dashboard-profile.component.html',
  styleUrls: ['./dashboard-profile.component.scss']
})
export class DashboardProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  editPrimaryInfo(): void{
    let a = document.getElementById("hidef_2");
    a.style.display = "block";
    let b = document.getElementById("form_large");
    b.style.opacity = "0.6";
    let c = document.getElementById("email").innerHTML;
    document.getElementById("ip_email").setAttribute('value',c);
    let d = document.getElementById("number").innerHTML;
    document.getElementById("ip_number").setAttribute('value',d);
    let e = document.getElementById("username").innerHTML;
    document.getElementById("ip_username").setAttribute('value',e);
    let f = document.getElementById("bussrole").innerHTML;
    document.getElementById("ip_bussrole").setAttribute('value',f);
  }

  closeFormPI(): void{
    let a = document.getElementById("hidef_2");
    a.style.display = 'none';
    let b = document.getElementById("form_large");
    b.style.opacity = "1";
  }

  editPersonalInfo(): void{
    let a = document.getElementById("hidef");
    a.style.display = "block";
    let b = document.getElementById("form_large");
    b.style.opacity = "0.6";
    let c = document.getElementById("firstname").innerHTML;
    document.getElementById("ip_firstname").setAttribute('value',c);
    let d = document.getElementById("lastname").innerHTML;
    document.getElementById("ip_lastname").setAttribute('value',d);
    var e = document.getElementById("dob").innerHTML;
    document.getElementById("ip_dob").setAttribute('value',e);
    let f = document.getElementById("contactnumber").innerHTML;
    document.getElementById("ip_cn").setAttribute('value',f);
    let g = document.getElementById("org").innerHTML;
    document.getElementById("ip_org").setAttribute('value',g);
    let o = document.getElementById("occ").innerHTML;
    document.getElementById("ip_occ").setAttribute('value',o);
    let r = document.getElementById("others").innerHTML;
    document.getElementById("ip_others").setAttribute('value',r);
    let y = document.getElementById("gender").innerHTML;
    switch (y) {
      case " Male ":
        document.getElementById("ip_male").setAttribute('checked','true');
        break;
      case " Female ":
        document.getElementById("ip_female").setAttribute('checked','true');
        break;
      case " Other ":
        document.getElementById("ip_other").setAttribute('checked','true');
        break;
      default:
        break;
    }
  }

  closeFormPE(): void{
    let b = document.getElementById("hidef");
    b.style.display = 'none';
    let c = document.getElementById("form_large");
    c.style.opacity = "1";
  }

}
