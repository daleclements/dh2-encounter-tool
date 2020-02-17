import { Injectable } from '@angular/core';
import { LocalStoreService } from './local-store.service';
import { Participant } from '../data/participant';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private store: LocalStoreService) { }

  async savePCs(PCs: Participant[]) {
    this.store.savePCs(PCs);
  }

  loadPCs(): Observable<Participant[]> {
    //this will automatically complete after emitting once just like an http response, right?
    return of(this.store.loadPCs());
  }
}
