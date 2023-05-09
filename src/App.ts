import { MakeArgs } from "./ArgsMaker";

function FindValues(arr: number[], p: number): number[] {
    let result: number[] = [];

    let left = 0;
    let right = arr.length - 1;

    let cmdLabel = 'Exec';

    console.time(cmdLabel);

    while (left < right) {
        if ((arr[left] + arr[right]) == p) {
            result.push(arr[left], arr[right]);
            break;
        }
        else if (arr[left] + arr[right] > p) {
            right -= 1;
        }
        else {
            left += 1;
        }
    }

    console.timeEnd(cmdLabel);

    return result;
}

let args = MakeArgs();

args.PrintArray();
args.PrintValue();

let values = FindValues(args.Array, args.Value);

console.log('Result values:', values);
