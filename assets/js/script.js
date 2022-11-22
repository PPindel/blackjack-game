/* global variables below */

let two = parseInt(2);
let three = parseInt(3);
let four = parseInt(4);
let five = parseInt(5);
let six = parseInt(6);
let seven = parseInt(7);
let eight = parseInt(8);
let nine = parseInt(9);
let ten = parseInt(10);
let jack = parseInt(10);
let queen = parseInt(10);
let king = parseInt(10);
let ace = parseInt(11);

let deck = [two, two, two, two, three, three, three, three, four, four, four, four, five, five, five, five, six, six, six, six, seven, seven, seven, seven,
    eight, eight, eight, eight, nine, nine, nine, nine, ten, ten, ten, ten, jack, jack, jack, jack, queen, queen, queen, queen, king, king, king, king, ace, ace, ace, ace
];

let i = 0;
let currentUserCards = [];
let currentCpuCards = [];

document.addEventListener("DOMContentLoaded", runGame);

function runGame() {

    shuffle();
    userScore = 0;
    cpuScore = 0;

    document.getElementById("user").innerHTML = `
    <div class="cards"><p>${deck[51]}</p></div>
    <div class="cards"><p>${deck[49]}</p></div>`;
    currentUserCards = [deck[51], deck[49]];

    document.getElementById("cpu").innerHTML = `
    <div class="cards" id="questionMark"><p>?</p></div>
    <div class="cards"><p>${deck[48]}</p></div>`;
    currentCpuCards = [deck[50], deck[48]];

}

function shuffle() {

    deck = deck.sort(() => Math.random() - 0.5);

}

function checkResult() {
    let userScore = 0;
    let cpuScore = 0;
    for (let c = 0; c < currentUserCards.length; c++) {
        userScore += parseInt(currentUserCards[c]);
    }
    console.log("User score: " + userScore);

    for (let d = 0; d < currentCpuCards.length; d++) {
        cpuScore += parseInt(currentCpuCards[d]);
    }
    console.log("CPU score: " + cpuScore);

    if (userScore > cpuScore && userScore < 22) {
        alert("You win!");
    } else if (userScore === cpuScore) {
        alert("Draw!");
    } else {
        alert("Computer wins!");
    }
}

function drawCards() {
    let userTable = document.getElementById("user").innerHTML;
    let newUserCard = deck[i];
    currentUserCards.push(newUserCard);
    userTable += `
    <div class="cards"><p>${newUserCard}</p></div>`
    document.getElementById("user").innerHTML = userTable;

    let cpuTable = document.getElementById("cpu").innerHTML;
    let newCpuCard = deck[i + 1];
    currentCpuCards.push(newCpuCard);
    cpuTable += `
    <div class="cards"><p>${newCpuCard}</p></div>`
    document.getElementById("cpu").innerHTML = cpuTable;
    i = i + 2;
}

/* adding more cards after clik hit button */
let hitButton = document.getElementById("hit");
hitButton.addEventListener("click", drawCards);

let stayButton = document.getElementById("stay");
stayButton.addEventListener("click", function(){
    document.getElementById("questionMark").innerHTML = `<p>${deck[50]}</p>`;
    checkResult();
});

let newGameButton = document.getElementById("newGame");
newGameButton.addEventListener("click", runGame);