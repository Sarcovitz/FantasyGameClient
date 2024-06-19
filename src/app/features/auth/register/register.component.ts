import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthModule } from '../auth.module';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [AuthModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  public registerForm = new FormGroup({
		username: new FormControl('', [
			Validators.required,
			Validators.minLength(3),
			Validators.maxLength(16),
			Validators.pattern(/^[a-zA-Z0-9]+$/),
		]),
		email: new FormControl('', [
			Validators.required,
      Validators.email,
		]),
		password: new FormControl('', [
			Validators.required,
			Validators.minLength(6),
		]),
		password2: new FormControl('', [
			Validators.required,
			Validators.minLength(6),
		]),
	});

  constructor() {}

  ngOnInit(): void {
  }

  onSubmit(): void{

  }
}
