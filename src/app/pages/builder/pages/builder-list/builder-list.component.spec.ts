import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderListComponent } from './builder-list.component';

describe('BuilderListComponent', () => {
  let component: BuilderListComponent;
  let fixture: ComponentFixture<BuilderListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuilderListComponent]
    });
    fixture = TestBed.createComponent(BuilderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
