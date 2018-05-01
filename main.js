"use strict";
let grantsHealth = 10;
let playersHealth = 40;
let playersWins = 0;
let grantsWins = 0;

let gamePrompt = prompt("Do you want to play?");
let answer = gamePrompt.toLowerCase();
console.log(answer);
if (answer !== 'no') {
    let name = prompt("What is your name?");
    while (playersWins < 3 && grantsWins !== 1) {
        if (playersHealth >= 1 && grantsHealth >= 1) {
            console.log(`${name} has ${playersHealth} health.`);
            console.log(`Grant has ${grantsHealth} health.`);
            playersHealth -= Math.floor(Math.random() * 2 + 1);
            grantsHealth -= Math.floor(Math.random() * 2 + 1);
            console.log(`${name} has ${playersHealth} left.`);
            console.log(`Grant has ${grantsHealth} left.`);
        } else if (playersHealth <= 0) {
            grantsWins++;
        } else if (grantsHealth < 1) {
            playersWins++;
            grantsHealth = 10;
            if (playersWins < 3) {
                console.log(`Grant started over at ${grantsHealth} health`)
            }
        }
    }
    if (playersWins === 3) {
        console.log(`Congratulations ${name} has won 3 times!`);
    } else if (grantsWins === 1) {
        console.log("Grant has won!");
    }
} else {
    console.log("Goodbye")
}