export class AnimalModel {
    id: number;
    type: number;
    name: string;
    ownerId: number;

    constructor(type: number, name: string, ownerId: number) {
        this.type = type;
        this.name = name;
        this.ownerId = ownerId;
    }
}