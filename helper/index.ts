import type {Difficulty} from '../types/index.ts';
import { systemGuess } from '../store/config.ts';

export function displayWelcomeMessage():null{
    console.log("Welcome to the Number Guessing Game!");
    console.log("I'm thinking of a number between 1 and 100.");
    console.log("You have 5 chances to guess the correct number.");
    return null;
}

export function displayLevels():null{
    const levels:Difficulty[] = [{level:"Easy",chances:10},{level:"Medium",chances:5},{level:"Hard",chances:3}]
    console.log("\n")
    console.log("Please select the difficulty level:")
    levels.forEach((level:Difficulty,i:number)=>{
        console.log(`${i+1}. ${level.level} (${level.chances} chances.)`);
    })
    return null;
}

export function getRandomNumber():number{
    const randomNumber = Math.floor(Math.random() * (100 - 1))
    return randomNumber;
}

export function setRandomNumber(num:number):boolean{
    try {
        systemGuess.guess = num;
        return true
    } catch (error) {
        return false
    }
}