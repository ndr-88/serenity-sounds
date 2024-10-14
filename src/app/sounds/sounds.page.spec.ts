import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoundsPage } from './sounds.page';

describe('SoundsPage', () => {
  let component: SoundsPage;
  let fixture: ComponentFixture<SoundsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
