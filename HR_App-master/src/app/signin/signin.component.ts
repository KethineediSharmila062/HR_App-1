import { Component, OnInit } from '@angular/core';
import { Signin } from '../signin';
import { SigninService } from '../signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signin: Signin = new Signin();
  submitted = false;
  constructor(private signinService: SigninService) { }
     // tslint:disable-next-line: member-ordering
  public changeText(): void {
      const x: Date = new Date();
      // tslint:disable-next-line: prefer-const
      // tslint:disable-next-line: ban-types
      const signin: String = x.toString();
      document.getElementById('signin').innerHTML = ('Signin = ' + signin);
      this.signin.signin = signin.toString();
    }
  ngOnInit() {
  }
  save() {
    console.log('on Submit ', this.signin);
    this.signinService.createSignin(this.signin).subscribe(
     data => {
       console.log(data);
      },
     error => {
        console.log(error);
     });
    this.signin = new Signin();
   }
   onSubmit()  {
     this.submitted = true;
     this.save();
   }
}
