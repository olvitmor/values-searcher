export class Args {
    Array: number[];
    Value: number;
    constructor(arr:number[], val:number){
        this.Array = arr;
        this.Value = val;
    }

    PrintArray = () => { console.log('Array: ', this.Array) };
    PrintValue = () => { console.log('Value: ', this.Value) };
}