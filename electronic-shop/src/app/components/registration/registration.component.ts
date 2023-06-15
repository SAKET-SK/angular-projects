import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  singup:FormGroup|any;
  signuser:any;

  ngOnInit(): void {
    this.singup = new FormGroup({
      'username': new FormControl(),
      'password':new FormControl(),
    })
  }

  singupdata(singup:FormGroup){
    console.log(this.singup.value);
    this.signuser = this.singup.value.fname
    this.http.post<any>("http://localhost:3000/signupUsers", this.singup.value)
    .subscribe(res=>{
      alert('data added successfully');
      this.singup.reset();
      this.router.navigate(['./login']);
    }, err=>{
      alert('Somthing went wrong');
    })

  }

}
