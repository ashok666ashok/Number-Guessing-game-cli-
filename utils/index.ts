import readline from 'node:readline/promises';
import {stdin as input,stdout as output} from 'node:process';

export async function getInput(q:string):Promise<any>{
    const r1  = readline.createInterface({input,output});
    const userInput = await r1.question(q);
    r1.close()
    return userInput
}

