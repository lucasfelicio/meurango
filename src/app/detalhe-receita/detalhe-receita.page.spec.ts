import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheReceitaPage } from './detalhe-receita.page';

describe('DetalheReceitaPage', () => {
  let component: DetalheReceitaPage;
  let fixture: ComponentFixture<DetalheReceitaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheReceitaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheReceitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
