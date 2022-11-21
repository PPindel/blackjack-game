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

let i = 0;

let deck = [two, two, two, two, three, three, three, three, four, four, four, four, five, five, five, five, six, six, six, six, seven, seven, seven, seven,
    eight, eight, eight, eight, nine, nine, nine, nine, ten, ten, ten, ten, jack, jack, jack, jack, queen, queen, queen, queen, king, king, king, king, ace, ace, ace, ace
];

document.addEventListener("DOMContentLoaded", runGame);

function runGame() {

    shuffle();

    document.getElementById("user").innerHTML = `
    <div class="cards"><p>${deck[51]}</p></div>
    <div class="cards"><p>${deck[49]}</p></div>`;

    document.getElementById("cpu").innerHTML = `
    <div class="cards"><p>${deck[50]}</p></div>
    <div class="cards"><p>${deck[48]}</p></div>`;

}

function shuffle() {

    deck = deck.sort(() => Math.random() - 0.5);

}

/* adding more cards after clik hit button */
let hitButton = document.getElementById("hit");
hitButton.addEventListener("click", function () {

    let userTable = document.getElementById("user").innerHTML;
    let newUserCard = deck[i];
    userTable += `
    <div class="cards"><p>${newUserCard}</p></div>`
    document.getElementById("user").innerHTML = userTable;

    let cpuTable = document.getElementById("cpu").innerHTML;
    let newCpuCard = deck[i + 1];
    cpuTable += `
    <div class="cards"><p>${newCpuCard}</p></div>`
    document.getElementById("cpu").innerHTML = cpuTable;
    i = i + 2;
});

let stayButton = document.getElementById("stay");
stayButton.addEventListener("click", runGame);