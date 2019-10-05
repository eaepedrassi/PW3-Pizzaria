import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'has-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {

  formComanda: FormGroup;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {

    this.formComanda = this.formBuilder.group({
      Chopp : this.formBuilder.control('2'),
      Pizza : this.formBuilder.control('2'),
      Recheios : this.formBuilder.control('4'),
      Pessoas : this.formBuilder.control('4')
      })

  }

  onSubmit(){
    console.log(this.formComanda.value)
  }
 

}
