import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SharedContentService } from '../shared-content.service';
import { Warrior } from './warrior.model';

@Component({
  selector: 'app-warriors',
  templateUrl: './warriors.component.html',
  styleUrls: ['./warriors.component.css']
})
export class WarriorsComponent implements OnInit {

  public modalRef: BsModalRef;
  public warriorForm: FormGroup;
  public title = 'Warriors';
  public warriorSelected: Warrior;
  public textSimple: string;

  public warriors: Array<{ id: number, name: string, lastName: string, class: string }> = [
    { id: 1, name: "Gaia", lastName: 'Sapuski', class: 'Priest' },
    { id: 2, name: "Lin", lastName: 'March', class: 'Warrior' },
    { id: 3, name: "Lira", lastName: 'Moya', class: 'Mage' },
    { id: 4, name: "Monka", lastName: 'Manco', class: 'Druid' },
    { id: 5, name: "Birt", lastName: 'Bird', class: 'Assassin' },
    { id: 6, name: "Robert", lastName: 'Trujillo', class: 'Bard' },
  ];

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb: FormBuilder, 
              private modalService: BsModalService,
              private sharedContentService: SharedContentService) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    this.warriorForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      class: ['', Validators.required]
    });
  }

  warriorSelect(warrior: Warrior) {
    this.warriorSelected = warrior;
    this.warriorForm.patchValue(warrior);
    console.log(this.sharedContentService.getCurrentValue());
  }

  voltar() {
    this.warriorSelected = null;
  }

  warriorSubmit() {
    console.log(this.warriorForm.value);
  }

}
