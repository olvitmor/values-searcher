import { Paths } from './Paths';
import { IConfig } from './interfaces/IConfig';
import { IJsonManager } from './interfaces/IJsonManager';
import { Args } from './models/Args';
import { Config } from './models/Config';
import { JsonManager } from './models/JsonManager';

const configPath = Paths.CONFIG_FILE;
const jsonManager:IJsonManager  = new JsonManager();

function CreateDefaultConfig(defaultConf: IConfig){
    var rawData = JSON.stringify(defaultConf);
    jsonManager.WriteJson(configPath, rawData);
}

function TryReadConfig(): IConfig {
    let result: IConfig = new Config();
    console.log('Attemting to read config.json');
    try {
        if (!jsonManager.IsExists(configPath)){
            console.log('config.json does not exists, creating default...')
            CreateDefaultConfig(result);
        }
        else{
            console.log('Reading...');
            result = jsonManager.ReadJson(configPath);
        }
    }
    catch (e: any) {
        console.log(`Error reading config.json: ${e.message}`);
    }
    return result;
}

function MakeRandomArr(len:number, min:number, max:number): number[]{
    let arr = Array.from(
        {length: len},
        () => Math.floor(Math.random() * (max - min + 1)) + min
    );
    arr.sort();
    return arr;
}

export const MakeArgs = function (): Args {
    let config: IConfig = TryReadConfig();
    let arr = config.DefaultArray;
    if (config.UseRandomArr){
        arr = MakeRandomArr(config.RandLen, config.RandMin, config.RandMax);
    }
    let val = config.TargetValue;    
    return new Args(arr, val);
}