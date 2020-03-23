import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerRecipeComponent } from './ver-recipe.component';

describe('VerRecipeComponent', () => {
  let component: VerRecipeComponent;
  let fixture: ComponentFixture<VerRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
