import { Injectable } from '@angular/core';
import { Forniture } from '../forniture/forniture.model';

@Injectable({
  providedIn: 'root'
})
export class FornitureService {

  fornitureSource: Array<Forniture> = [
    { id: 1, name: "Geladeira", price: 2500.00, observation: "Frost Free" },
    { id: 2, name: "Fogão", price: 1300.00, observation: "" },
    { id: 3, name: "Cama", price: 1300.00, observation: "" },
    { id: 4, name: "Air Fryer", price: 1200.00, observation: "" },
    { id: 5, name: "Microondas", price: 500.00, observation: "" },
    { id: 6, name: "Panela Polishop", price: 500.00, observation: "" },
  ]

  constructor() { }

  currentForniture: Forniture;

  getCurrentValue() {
    return this.currentForniture;
  }

  setCurrentValue(forniture: Forniture) {
    this.currentForniture = forniture;
  }

  getFornitureSource() {
    this.fornitureSource = this.fornitureSource.sort((a: Forniture, b: Forniture) => {
      if (a.id < b.id) {
        return -1;
      } else if (a.id > b.id) {
        return 1;
      } else {
        return 0;
      }
    });

    return this.fornitureSource;
  }

  setFornitureSource(forniture: Forniture) {
    this.fornitureSource = this.fornitureSource.filter(x => x.id !== forniture.id);
    
    this.currentForniture = forniture;
    this.fornitureSource.push(this.currentForniture);
  }
}
