import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApresentaPage } from './apresenta.page';

describe('ApresentaPage', () => {
  let component: ApresentaPage;
  let fixture: ComponentFixture<ApresentaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ApresentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
