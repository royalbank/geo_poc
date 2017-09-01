export class Hero {
    id: number;
    name: string;
    isSecret = false;

    constructor(name: string, id: number) {
        this.id = id;
        this.name = name;
    }
}
