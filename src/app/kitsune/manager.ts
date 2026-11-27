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
            boost: true
        },
        {
            name: "Kitsune_2",
            description: "Lorem ipsum",
            hp: 100,
            strength: 10,
            speed: 10,
            isResting: false,
            wins: 0,
            boost: false
        },
        {
            name: "Kitsune_3",
            description: "Lorem ipsum",
            hp: 100,
            strength: 10,
            speed: 10,
            isResting: false,
            wins: 0,
            boost: false
        },
        {
            name: "Kitsune_4",
            description: "Lorem ipsum",
            hp: 100,
            strength: 10,
            speed: 10,
            isResting: false,
            wins: 0,
            boost: false
        },
        {
            name: "Kitsune_5",
            description: "Lorem ipsum",
            hp: 100,
            strength: 10,
            speed: 10,
            isResting: false,
            wins: 0,
            boost: false
        }
    ]);
    public getList = this.list.asReadonly();

    public addKitsune = (
        name: string,
        description: string,
        hp: number,
        strength: number,
        speed: number
    ) => {
        const newKitsune: KitsuneInterface = {
            name: name,
            description: description,
            hp: hp,
            strength: strength,
            speed: speed,
            isResting: false,
            wins: 0,
            boost: false
        }
        this.list.update((currentState) => [...currentState, newKitsune]);
    }
}
