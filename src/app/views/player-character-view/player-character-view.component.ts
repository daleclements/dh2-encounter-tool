import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlayerCharacterService } from 'src/app/services/player-character.service';
import { Participant } from 'src/app/data/participant';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-player-character-view',
  templateUrl: './player-character-view.component.html',
  styleUrls: ['./player-character-view.component.css']
})
export class PlayerCharacterViewComponent implements OnInit {

  PCs$: Observable<Participant[]>;
  
  constructor(private PCService: PlayerCharacterService) { }

  ngOnInit(): void {
    this.PCs$ = this.PCService.PCs$;
  }

  addParticipant() {
    this.PCService.add(new Participant());
  }

  onParticipantsChange(parts: Participant[]) {
    this.PCService.save(parts);
  }

}
