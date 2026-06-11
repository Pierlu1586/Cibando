import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/shared/validators/customValidator';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {

  value:string;


  form = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$')]),
    confirmPassword: new FormControl('', Validators.required),
    serviceTerms: new FormControl(false, Validators.requiredTrue)
  },
  [CustomValidators.matchValidator('password','confirmPassword')]
);

  constructor(private router: Router, private userService: UserService){}

  onSubmit() {
    console.log('Registration form REACTIVE FORM: ', this.form);

    const user = {nome: this.form.value.name, email: this.form.value.email};

    this.userService.datiUtente.next(user);
    this.router.navigate(['home']);
  }

/*     onSubmit(form) {
    console.log('Registration form TDF: ', form);
  } */
}
