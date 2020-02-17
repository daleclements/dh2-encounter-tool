import { Component, OnInit, Inject, OnDestroy } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Participant } from '../data/participant';
import { IconsService } from '../services/icons.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-participant-editor-dialog',
  templateUrl: './participant-editor-dialog.component.html',
  styleUrls: ['./participant-editor-dialog.component.css']
})
export class ParticipantEditorDialogComponent implements OnInit, OnDestroy {
  
  tempParticipant: Participant;

  constructor(
    public dialogRef: MatDialogRef<ParticipantEditorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public participant: Participant,
    public icons: IconsService) {}

  ngOnInit() {
    this.tempParticipant = this.participant.copy();
    this.dialogRef.backdropClick().pipe(take(1)).subscribe((e: MouseEvent) => {
      e.preventDefault();
      this.dialogRef.close(this.tempParticipant);
    });
  }

  incrementHP(e: Event) {
    e.preventDefault();
    this.tempParticipant.hp++;
  }

  decrementHP(e: Event) {
    e.preventDefault();
    this.tempParticipant.hp--;
  }

  incrementAmmo(e: Event) {
    e.preventDefault();
    this.tempParticipant.ammo++;
  }

  decrementAmmo(e: Event) {
    e.preventDefault();
    this.tempParticipant.ammo--;
  }

  cancel() {
    this.dialogRef.close(null);
  }

  onSubmit() {
  }

  backDropClick() {

  }

  ngOnDestroy() {
  }

}
