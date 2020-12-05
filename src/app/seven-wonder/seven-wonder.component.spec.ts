import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevenWonderComponent } from './seven-wonder.component';

describe('SevenWonderComponent', () => {
  let component: SevenWonderComponent;
  let fixture: ComponentFixture<SevenWonderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SevenWonderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SevenWonderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
