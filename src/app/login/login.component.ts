import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username : string = '';
  password : string = '';
  errorMessage : string = '';

  /**
   *
   */
  constructor(private auth: AuthService, private router: Router) {
      
  }
  

  validateCredentials(event : Event) {
    event.preventDefault();
    this.errorMessage = '';
    console.log(this.username, this.password);
    if(this.username.trim().length == 0) {
      this.errorMessage = "Username cannot be empty";
    } else if(this.password.trim().length == 0) {
      this.errorMessage = "Password cannot be empty";
    }
    //TODO : Move this to an auth service
    if(this.auth.login(this.username, this.password)===200) {
      console.log("Authentication successful");
      this.router.navigate(['home']);
    }
    else {
      console.log("Invalid Username or Password");
      this.errorMessage = 'Invalid Username or Password';
    }
  }

}
