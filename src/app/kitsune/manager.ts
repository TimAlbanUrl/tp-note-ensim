import { Service, signal } from "@angular/core";
import { KitsuneInterface } from './kitsune-interface';

@Service()
export class Manager {
    private readonly list = signal<KitsuneInterface[]>([
        {
            name: "Kitsune_1",
            description: "Lorem ipsum",
            hp: 100,
            strength: 10,
            speed: 10,
            isResting: false,
            wins: 0,
            boost: true,
            boostAttemptsLeft: 3
        },
        {
            name: "Kitsune_2",
            description: "Lorem ipsum",
            hp: 100,
            strength: 10,
            speed: 10,
            isResting: false,
            wins: 0,
            boost: false,
            boostAttemptsLeft: 3
        },
        {
            name: "Kitsune_3",
            description: "Lorem ipsum",
            hp: 100,
            strength: 10,
            speed: 10,
            isResting: false,
            wins: 0,
            boost: false,
            boostAttemptsLeft: 3
        },
        {
            name: "Kitsune_4",
            description: "Lorem ipsum",
            hp: 100,
            strength: 10,
            speed: 10,
            isResting: false,
            wins: 0,
            boost: false,
            boostAttemptsLeft: 3
        },
        {
            name: "Kitsune_5",
            description: "Lorem ipsum",
            hp: 100,
            strength: 10,
            speed: 10,
            isResting: true,
            wins: 0,
            boost: false,
            boostAttemptsLeft: 3
        }
    ]);
    public getList = this.list.asReadonly();

    public tryToBoost = (name: string) => {
        const kitsune = this.getKitsune(name);
        if(!kitsune)
            return;
        if(kitsune.boostAttemptsLeft == 0)
            return;
        kitsune.boostAttemptsLeft--;
        if(Math.random() < 0.25)
            kitsune.boost = true;
    }

    public isNameAvailable = (name: string) => {
        return this.getKitsune(name) == null;
    }

    public getKitsune = (name: string | null) => {
        if(!name)
            return null;
        const result = this.list().filter((kitsune: KitsuneInterface) => kitsune.name === name);
        if(result.length === 0)
            return null;
        return result[0];
    }

    public addKitsune = (
        name?: string | null,
        description?: string | null,
        hp?: number | null,
        strength?: number | null,
        speed?: number | null
    ) => {
        if(!(name && description && hp && strength && speed))
            return;
        const newKitsune: KitsuneInterface = {
            name: name,
            description: description,
            hp: hp,
            strength: strength,
            speed: speed,
            isResting: false,
            wins: 0,
            boost: false,
            boostAttemptsLeft: 3
        }
        this.list.update((currentState) => [...currentState, newKitsune]);
    }
}
