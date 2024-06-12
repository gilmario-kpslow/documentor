import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoTabelaComponent } from './projeto-tabela.component';

describe('ProjetoTabelaComponent', () => {
  let component: ProjetoTabelaComponent;
  let fixture: ComponentFixture<ProjetoTabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetoTabelaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetoTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
