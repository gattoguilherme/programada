import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FornitureService } from '../services/forniture.service';

@Component({
  selector: 'app-forniture-edit',
  templateUrl: './forniture-edit.component.html',
  styleUrls: ['./forniture-edit.component.css']
})
export class FornitureEditComponent implements OnInit {

  public fornitureForm: FormGroup;

  constructor(private fb: FormBuilder,
              private fornitureService: FornitureService, ) {
    this.createForm();
   }

  ngOnInit(): void {
    this.fornitureForm.patchValue(this.fornitureService.getCurrentValue());
  }
  
  fornitureSubmit() {
    console.log(this.fornitureForm.value);

    this.fornitureService.setFornitureSource(this.fornitureForm.value);
  }

  createForm() {
    this.fornitureForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      price: ['', Validators.required],
      observation: ['']
    });
  }
}
