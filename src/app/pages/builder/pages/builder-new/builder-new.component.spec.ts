import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderNewComponent } from './builder-new.component';

describe('BuilderNewComponent', () => {
  let component: BuilderNewComponent;
  let fixture: ComponentFixture<BuilderNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuilderNewComponent]
    });
    fixture = TestBed.createComponent(BuilderNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
