import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router} from '@angular/router';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
   formdata;
   constructor(private router: Router) { }
   ngOnInit() {
      this.formdata = new FormGroup({
         uid: new FormControl("", Validators.compose([
            Validators.required,
            Validators.minLength(6)
         ])),
         passwd: new FormControl("", this.passwordvalidation)
      });
   }
   passwordvalidation(formcontrol) {
      if (formcontrol.value.length < 5) {
         return {"passwd" : true};
      }
   }
   onSubmit(data) {
      console.log(data.uid);
      if (data.uid == "lt0062" && data.passwd == "sharmila") {
         alert("Login Successful");
         this.router.navigate(['activities'])
      }
      else if(data.uid=="166" && data.passwd=="anuhya") {
        alert("Login Successful");
         this.router.navigate(['activities'])
      }
      else if(data.uid=="175" && data.passwd=="mounika") {
        alert("Login Successful");
         this.router.navigate(['activities'])
      }
      else if(data.uid=="127" && data.passwd=="deepika") {
        alert("Login Successful");
         this.router.navigate(['activities'])
      }
         else if(data.uid=="184" && data.passwd=="ramya") {
          alert("Login Successful");
          this.router.navigate(['activities'])
                   } 
                   else {
                     alert("Login with wrong credentials")
                   }     
   }
}