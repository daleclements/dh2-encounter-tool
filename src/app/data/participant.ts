import { Status } from './status';
import * as RandomNameGenerator from 'random-character-name';

export class Participant {
    name: string;
    hp: number;
    ammo: number;
    ammoMax: number;
    initiative: number;
    initiativeMod: number;
    statuses: Array<Status>;

    constructor() {
        this.name = "";
        this.hp = 10;
        this.ammo = 10;
        this.ammoMax = 10;
        this.initiativeMod = 0;
        this.statuses = new Array<Status>();

        this.rollInitiative();

        let randomName: string = RandomNameGenerator.single();
        let temp = randomName.split(" ");
        temp.splice(1, 1);
        randomName = temp.join(" ");
        this.name = randomName;
    }

    public copy() {
        let copy = new Participant();
        copy.name = this.name;
        copy.hp = this.hp;
        copy.ammo = this.ammo;
        copy.ammoMax = this.ammoMax;
        copy.initiative = this.initiative;
        copy.initiativeMod = this.initiativeMod;
        copy.statuses = JSON.parse(JSON.stringify(this.statuses)); //deep copy
        return copy;
    }

    private rollInitiative() {
        this.initiative = (Math.floor(Math.random() * 10) + 1) + this.initiativeMod;
    }

}


