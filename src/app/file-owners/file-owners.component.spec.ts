import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileOwnersComponent } from './file-owners.component';

describe('FileOwnersComponent', () => {
  let component: FileOwnersComponent;
  let fixture: ComponentFixture<FileOwnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileOwnersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileOwnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
