import {userInfo} from '../store/config.ts';
import type { UserInfo } from '../types/index.ts';
import { systemGuess as guess} from '../store/config.ts';
import { getInput } from '../utils/index.ts';
export function saveUserInfo(obj:UserInfo):boolean{
    try {
        userInfo.level=obj.level;
        userInfo.attempt = obj.attempt;
        return true;
    } catch (error) {
        return false
    }
}

export function showUserLevel(){
    let msg = `Great! You have selected the ${userInfo.level} difficulty level`
    console.log("\n"+msg +"\nLet's start the game!")
}

export async function play(){
    let user_try:number = 1;
    while (user_try<=userInfo.attempt){
        const userGuess:Promise<number> = await  getInput(`Enter your ${user_try} guess: `);
        if(await userGuess == guess.guess){
            console.log(`\nCongratulations! You guessed the correct number in ${user_try} attempts.`)
            return true;
        }else{
            (await userGuess > guess.guess) ? 
            console.log(`Incorrect! The number is less than ${userGuess}.`) :
            console.log(`Incorrect! The number is greater than ${userGuess}.`)
        }
        user_try ++
    }
    return false
}