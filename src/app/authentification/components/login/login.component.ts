import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;
  constructor(private fb: FormBuilder,
    private router: Router){

  }

  ngOnInit(): void {
    this.loginForm = this.initForm();
  }

  private initForm(){
    return this.fb.group({
      username: new FormControl('',[ Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Ajoutez votre logique de connexion ici
      console.log('Formulaire soumis', this.loginForm.value);
      this.router.navigateByUrl('/');
    } else {
      // Gérer les erreurs de formulaire si nécessaire
    }
  }


}
