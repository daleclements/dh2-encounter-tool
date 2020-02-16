import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

//My stuff
import { Participant } from '../data/participant';
import { IconsService } from '../services/icons.service';

@Component({
  selector: 'app-participant-card',
  templateUrl: './participant-card.component.html',
  styleUrls: ['./participant-card.component.css']
})
export class ParticipantCardComponent implements OnInit {

  @Input() name: string;
  @Output() nameChange = new EventEmitter<string>();

  @Input() hp: number;
  @Output() hpChange = new EventEmitter<number>();

  @Input() ammo: number;
  @Input() ammoChange = new EventEmitter<number>();

  @Input() ammoMax: number;

  @Input() initiative: number;

  constructor(public icons: IconsService) {
  }

  ngOnInit() {
  }

}
