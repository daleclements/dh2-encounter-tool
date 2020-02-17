import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Participant } from 'src/app/data/participant';
import { ParticipantEditorDialogComponent } from 'src/app/participant-editor-dialog/participant-editor-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.css']
})
export class ParticipantListComponent implements OnInit {

  @Input() participants: Participant[];
  @Output() participantsChange = new EventEmitter<Participant[]>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  editParticipant(p: Participant) {
    let participantEditorDialog = this.dialog.open(ParticipantEditorDialogComponent, {
      data: p
    });

    participantEditorDialog.afterClosed().subscribe((newParticipant) => {
      if(newParticipant) {
        this.participants[this.participants.indexOf(p)] = newParticipant;
        this.participantsChange.emit(this.participants);
      }
    }); 
  }

}
