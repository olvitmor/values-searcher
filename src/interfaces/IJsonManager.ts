export interface IJsonManager {
    ReadJson(path: string): any;
    WriteJson(path: string, json: string): void;
    IsExists(path:string) : boolean;
}