import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarAdmin2Component } from './sidebar-admin2.component';

describe('SidebarAdmin2Component', () => {
  let component: SidebarAdmin2Component;
  let fixture: ComponentFixture<SidebarAdmin2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarAdmin2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarAdmin2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
