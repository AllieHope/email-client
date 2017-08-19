import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentThreadComponent } from './current-thread.component';

describe('CurrentThreadComponent', () => {
  let component: CurrentThreadComponent;
  let fixture: ComponentFixture<CurrentThreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentThreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentThreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
