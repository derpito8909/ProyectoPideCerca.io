import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyMapaComponent } from './body-mapa.component';

describe('BodyMapaComponent', () => {
  let component: BodyMapaComponent;
  let fixture: ComponentFixture<BodyMapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyMapaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyMapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
