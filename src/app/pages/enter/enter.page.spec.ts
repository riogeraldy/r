import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterPage } from './enter.page';

describe('EnterPage', () => {
  let component: EnterPage;
  let fixture: ComponentFixture<EnterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
