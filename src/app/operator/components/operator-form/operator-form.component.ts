import { Component, OnInit } from '@angular/core';
import { Operator } from '../../model/operator';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OperatorService } from '../../service/operator.service';

@Component({
  selector: 'app-operator-form',
  templateUrl: './operator-form.component.html',
  styleUrls: ['./operator-form.component.css'],
})
export class OperatorFormComponent implements OnInit {
  operator: Operator;
  operators: Operator[];
  operatorForm = new FormGroup({
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    cin: new FormControl('', Validators.required),
    adresse: new FormControl('', Validators.required),
    telephone: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
  });

  get prenom() {
    return this.operatorForm.get('prenom');
  }

  get nom() {
    return this.operatorForm.get('nom');
  }

  get cin() {
    return this.operatorForm.get('cin');
  }

  get adresse() {
    return this.operatorForm.get('adresse');
  }
  get telephone() {
    return this.operatorForm.get('telephone');
  }

  get username() {
    return this.operatorForm.get('username');
  }

  get email() {
    return this.operatorForm.get('email');
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private operatorService: OperatorService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.operator = this.operatorForm.value;
    console.log(this.operator);
    this.operatorService
      .save(this.operator)
      .subscribe((result) => this.goToClientList());
  }

  goToClientList() {
    this.router.navigate(['/clients']);
  }

  reset() {
    this.operatorForm.reset();
  }
}
