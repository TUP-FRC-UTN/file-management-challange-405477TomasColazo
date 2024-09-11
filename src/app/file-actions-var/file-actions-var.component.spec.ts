import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileActionsVarComponent } from './file-actions-var.component';

describe('FileActionsVarComponent', () => {
  let component: FileActionsVarComponent;
  let fixture: ComponentFixture<FileActionsVarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileActionsVarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileActionsVarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
