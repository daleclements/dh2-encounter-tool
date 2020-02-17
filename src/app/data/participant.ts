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

    public static deserialize(partJson: string): Participant {
        try {
            let target = new Participant();
            let source = JSON.parse(partJson);
            Object.keys(target).forEach(key => {
                switch(key) {
                    case "statuses":
                        let statuses = new Array<Status>();
                        //TODO: Deserialize statuses
                        target.statuses = statuses;
                        break;
                    default:
                        target[key] = source[key];
                        break;
                }
            });
            return target;
        } catch (e) {
            console.error("Failed to deserialize Participant", e);
            return null;
        }
    }

    public copy(): Participant {
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


