import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyTiendasComponent } from './body-tiendas.component';

describe('BodyTiendasComponent', () => {
  let component: BodyTiendasComponent;
  let fixture: ComponentFixture<BodyTiendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyTiendasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyTiendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
