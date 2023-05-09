import * as fs from 'fs';
import { IJsonManager } from "../interfaces/IJsonManager";
import { json } from 'stream/consumers';

export class JsonManager implements IJsonManager{
    ReadJson(path: string): any {
        let obj = JSON.parse(fs.readFileSync(path, {encoding: 'utf8'}));
        return obj;
    };

    WriteJson(path: string, json: string): void {
        fs.writeFileSync(path, json);
    }

    IsExists(path: string): boolean {
        return fs.existsSync(path);
    }
}