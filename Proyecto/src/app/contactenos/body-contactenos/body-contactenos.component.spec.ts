import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyContactenosComponent } from './body-contactenos.component';

describe('BodyContactenosComponent', () => {
  let component: BodyContactenosComponent;
  let fixture: ComponentFixture<BodyContactenosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyContactenosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyContactenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
