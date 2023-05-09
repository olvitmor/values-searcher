import { IConfig } from "../interfaces/IConfig";

export class Config implements IConfig{
    UseRandomArr: boolean = false;
    RandMin: number = -25;
    RandMax: number = 25;
    RandLen: number = 50
    TargetValue: number = -1;
    DefaultArray: number[] = [-3, -1, 0, 2, 6]

    constructor(){ }
}