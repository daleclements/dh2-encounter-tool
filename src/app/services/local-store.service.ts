import { Injectable } from '@angular/core';
import { Participant } from '../data/participant';

@Injectable({
  providedIn: 'root'
})
export class LocalStoreService {

  PCsKey = "PCs";

  constructor() { }

  savePCs(PCs: Participant[]) {
    const PCString = JSON.stringify(PCs);
    localStorage.setItem(this.PCsKey, PCString);
  }

  loadPCs(): Participant[] {
    try {
      const PCsString = localStorage.getItem(this.PCsKey);
      if(!PCsString) {
        return new Array<Participant>();
      }
      const PCsObject: any[] = JSON.parse(PCsString);
      let PCs = new Array<Participant>();
      PCsObject.forEach(PCObj => {
        //Isn't this inefficient because we JUST parsed it an now we're stringifying again? Yes.
        const PC = Participant.deserialize(JSON.stringify(PCObj));
        PCs.push(PC);
      });
      return PCs;
    } catch (e) {
      console.error("Failed to retrieve and parse PCs", e);
      return null;
    }
  }
}
