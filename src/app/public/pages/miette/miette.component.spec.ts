import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MietteComponent } from './miette.component';

describe('MietteComponent', () => {
  let component: MietteComponent;
  let fixture: ComponentFixture<MietteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MietteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MietteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
