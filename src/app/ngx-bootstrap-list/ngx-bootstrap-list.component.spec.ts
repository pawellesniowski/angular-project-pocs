import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBootstrapListComponent } from './ngx-bootstrap-list.component';

describe('NgxBootstrapListComponent', () => {
  let component: NgxBootstrapListComponent;
  let fixture: ComponentFixture<NgxBootstrapListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxBootstrapListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxBootstrapListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
