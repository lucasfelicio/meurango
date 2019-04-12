import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitasPage } from './receitas.page';

describe('ReceitasPage', () => {
  let component: ReceitasPage;
  let fixture: ComponentFixture<ReceitasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceitasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceitasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
