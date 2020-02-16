import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { Participant } from '../data/participant';
import { ParticipantEditorDialogComponent } from '../participant-editor-dialog/participant-editor-dialog.component';

@Component({
  selector: 'app-encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.css']
})
export class EncounterComponent implements OnInit {

  activeParticipant: Participant;
  participants: Array<Participant>;
  round: number;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.participants = new Array<Participant>();
    this.participants.push(new Participant());
    this.participants.push(new Participant());
    this.participants.push(new Participant());

    this.participants = this.sortParticipants(this.participants);

    this.round = 0;
    this.activeParticipant = this.participants[0];
  }

  addParticipant() {
    //For now
    this.participants.push(new Participant())
    this.participants = this.sortParticipants(this.participants);
  }

  editParticipant(p: Participant) {

    let participantEditorDialog = this.dialog.open(ParticipantEditorDialogComponent, {
      data: p
    });

    participantEditorDialog.afterClosed().subscribe((newParticipant) => {
      if(newParticipant) {
        this.participants[this.participants.indexOf(p)] = newParticipant;
      }
    });
  }

  nextTurn() {
    let activeIndex = this.participants.indexOf(this.activeParticipant);
    
    if(activeIndex >= this.participants.length - 1) {
      //We're already at the end of the turn order
      this.nextRound();
    } else {
      //Same round
      this.activeParticipant = this.participants[++activeIndex];
    }

  }

  nextRound() {
    this.round++;
    this.activeParticipant = this.participants[0];
  }

  sortParticipants(participants: Array<Participant>): Array<Participant> {
    return participants.sort((p1, p2) => {
      return p2.initiative - p1.initiative;
    })
  }

}
