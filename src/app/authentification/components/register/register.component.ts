import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private registerService: RegisterService,
    private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.initForm();
  }

  private initForm() {
    return this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      motdepasse: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }

  passwordMatchValidator(group: FormGroup) {
    const password = this.fb.control('motdepasse').value;
    const confirmPassword = this.fb.control('confirmPassword').value;
    return password === confirmPassword ? null : { passwordMismatch: true };
}

  onSubmit() {
    if (this.registerForm.valid) {  
      const userData : User = this.registerForm.value;
        this.registerService.createUser(userData).subscribe(
          response => {
            // Handle successful registration response
            console.log('Registration successful', response);
            this.router.navigateByUrl('/login');
          },
          error => {
            // Handle registration error
            console.error('Registration failed', error);
          });
      }
     else {
      // Handle form validation errors if necessary
      }
  }

}
