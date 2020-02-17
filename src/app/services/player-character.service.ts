import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Participant } from '../data/participant';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { take, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlayerCharacterService {

  private PCSubject = new BehaviorSubject<Participant[]>(null);
  PCs$: Observable<Participant[]> = this.PCSubject.asObservable().pipe(filter(list => list != null));

  //Watch out for race conditions when you use this
  private PCs: Participant[];

  constructor(private storage: StorageService) {
    storage.loadPCs().pipe(take(1)).subscribe(PCs => {
      this.PCSubject.next(PCs);
    });

    this.PCs$.subscribe(PCs => {
      this.PCs = PCs;
    });
  }

  add(PC: Participant) {
    this.PCs.push(PC);
    this.storage.savePCs(this.PCs);
  }

  save(PCs: Participant[]) {
    this.storage.savePCs(PCs).then(success => {
      this.PCSubject.next(PCs);
    }, error => {
      console.error("Failed to save PCs", error)
    })
  }
}
