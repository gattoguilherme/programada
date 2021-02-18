import { Component, OnInit, TemplateRef } from '@angular/core';
import { FornitureService } from '../services/forniture.service';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Forniture } from './forniture.model';

@Component({
  selector: 'app-forniture',
  templateUrl: './forniture.component.html',
  styleUrls: ['./forniture.component.css']
})
export class FornitureComponent implements OnInit {

  public title = "Fornitures Apartment";
  public modalRef: BsModalRef;

  public fornitures = this.fornitureService.getFornitureSource();

  constructor(private fornitureService: FornitureService,
              private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  editRow(forniture: Forniture, template: TemplateRef<any>) {
    console.log(forniture);

    this.fornitureService.setCurrentValue(forniture);
    this.modalRef = this.modalService.show(template);
  }

  closeEdit() {
    this.fornitures = this.fornitureService.getFornitureSource();
    this.modalRef.hide();
  }
}
