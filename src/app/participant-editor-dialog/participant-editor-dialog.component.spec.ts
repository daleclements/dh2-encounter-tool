import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantEditorDialogComponent } from './participant-editor-dialog.component';

describe('ParticipantEditorDialogComponent', () => {
  let component: ParticipantEditorDialogComponent;
  let fixture: ComponentFixture<ParticipantEditorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipantEditorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantEditorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
