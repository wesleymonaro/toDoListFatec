export class Task{
    public name: string;
    public status: number;
    public userId: string;
    //0 - aberta
    //1 - feita

    constructor(name = "", status = 0){
        this.name = name;
        this.status = status;
    }
}