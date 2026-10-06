

import {displayWelcomeMessage, displayLevels, getRandomNumber, setRandomNumber} from './helper/index.ts';
import { getInput } from './utils/index.ts';
import { play, saveUserInfo, showUserLevel } from './service/index.ts';

async function main(){
    var status = true;
    let retry = 0
    displayWelcomeMessage()
    displayLevels()
    let userInput = await getInput("Enter your choice: ");
    userInput = parseInt(userInput)
    let userInfo = {level:null,attempt:null}
    if(userInput === 1){
        userInfo.level="Easy"
        userInfo.attempt=10
    }else if(userInput === 2){
        userInfo.level = "Medium";
        userInfo.attempt = 5
    }else{
        userInfo.level = "Hard";
        userInfo.attempt = 3
    }
    status = saveUserInfo(userInfo)
    if(!status){
        console.log("something wrong to save User Info")
        process.exit(1)
    }
    showUserLevel()
    const randomNumber = getRandomNumber();
    status = setRandomNumber(randomNumber);
    if(!status){
        console.log("failed to guess number")
        process.exit(1)
    }
    status = await play();
    if(!status){
        console.log("YOU LOSE ❌");
        console.log("GAME OVER!");
    }else{
        console.log("YOU WON 🎉")
    } 
    retry++
    if(retry > 0){
        const userInput =await getInput("Do you want to Play Again?(Y/N)")
        if(await userInput.toLowerCase() == 'y'){
            main();
        }else{
            process.exit(1)
        }
        
    }
}

main()