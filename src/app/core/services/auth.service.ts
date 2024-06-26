import { Injectable } from '@angular/core';
import { RegisterUserDTO } from '../models/DTOs/RegisterUserDTO';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public jwtToken: string | undefined = undefined;
  
  constructor() { }

  register(registerUserRequest: RegisterUserRequest): void {
		this.isLoading = true;
		this.api.post<RegisterUserDTO>('/auth/register', registerUserRequest).subscribe({
			next: response => {
				let userdata: string = response.body?.username + ':' + response.body?.id + ':' + response.body?.email;
				userdata = Buffer.from(userdata).toString('base64');

				this.isLoading = false;
				this.router.navigateByUrl('/auth/registered/' + encodeURI(userdata));
			},
			error: error => {
				this.registerErrorMessage = error.error;
				this.isLoading = false;
			},
		});
	}
}
