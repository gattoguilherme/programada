import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Master} from './master.model';
import {SharedContentService} from '../shared-content.service';

@Component({
  selector: 'app-masters',
  templateUrl: './masters.component.html',
  styleUrls: ['./masters.component.css']
})
export class MastersComponent implements OnInit {

  public masterForm: FormGroup
  public title = "Masters";
  public masterSelected: Master;
  public textSimple: string;

  public masters: Array<{id:number, name: string, speciality: string}> = [
    { id: 1, name: "Midoriu", speciality: 'Magic'                 },
    { id: 2, name: "Shinbu" , speciality: 'Close Combat'          },
    { id: 3, name: "Haikara", speciality: 'Longe Range Combat'    },
  ];

  constructor(private fb: FormBuilder,
              private sharedContentSerice: SharedContentService) {
    this.createForm();
   }

  ngOnInit(): void {
  }

  createForm() {
    this.masterForm = this.fb.group({
      name: ['', Validators.required],
      speciality: ['', Validators.required]
    });
  }

  masterSelect(master: Master) {
    this.masterSelected = master;
    this.masterForm.patchValue(master);
  }

  voltar() {
    this.masterSelected = null;
  }

  masterSubmit() {
    console.log(this.masterForm.value);
  }

  setSharedValue() {
    this.sharedContentSerice.setCurrentValue("Master filled field");
  }

}
