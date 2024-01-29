import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css'],
})
export class SignupPageComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {}

  onSignupClicked(email: string, password: string) {
    this.authService
      .signup(email, password)
      .subscribe((res: HttpResponse<any>) => {
        if (res.status === 200) {
          // we have signed up successfully
          this.router.navigate(['/tasks']);
        }
        console.log(res);
      });
  }
}
