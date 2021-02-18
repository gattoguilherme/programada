import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedContentService {

  constructor() { }

  test: string;

  getCurrentValue() {
    return this.test;
  }

  setCurrentValue(testValue: any) {
    this.test = testValue;
  }
}
