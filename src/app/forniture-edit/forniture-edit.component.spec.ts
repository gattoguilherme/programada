import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FornitureEditComponent } from './forniture-edit.component';

describe('FornitureEditComponent', () => {
  let component: FornitureEditComponent;
  let fixture: ComponentFixture<FornitureEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FornitureEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FornitureEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
