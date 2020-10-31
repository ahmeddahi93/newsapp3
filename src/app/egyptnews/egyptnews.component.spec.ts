import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgyptnewsComponent } from './egyptnews.component';

describe('EgyptnewsComponent', () => {
  let component: EgyptnewsComponent;
  let fixture: ComponentFixture<EgyptnewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgyptnewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgyptnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
