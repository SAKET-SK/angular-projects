import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  public loginForm!: FormGroup;

  constructor(private http: HttpClient, private router: Router, private formBuilder: FormBuilder) { }
  
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username:[''],
      password:['']
    })
  }

  login(){
      this.http.get<any>("http://localhost:3000/signupUsers").subscribe(res=>{
        const user = res.find((a:any)=>{
          return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password
        });
        if(user){
         // alert("Login successful");
          this.router.navigate(['/list']);
          this.loginForm.reset();
        }else{
          alert("User not found");
        }
      },err=>{
        alert("Server error");
      })
   }

}
