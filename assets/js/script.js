/* global variable below */

let fullDeck = [{
        rank: "2",
        suite: `<i class="fa-solid fa-clover"></i>`,
        value: parseInt(2)
    },
    {
        rank: "3",
        suite: `<i class="fa-solid fa-clover"></i>`,
        value: parseInt(3)
    },
    {
        rank: "4",
        suite: `<i class="fa-solid fa-clover"></i>`,
        value: parseInt(4)
    },
    {
        rank: "5",
        suite: `<i class="fa-solid fa-clover"></i>`,
        value: parseInt(5)
    },
    {
        rank: "6",
        suite: `<i class="fa-solid fa-clover"></i>`,
        value: parseInt(6)
    },
    {
        rank: "7",
        suite: `<i class="fa-solid fa-clover"></i>`,
        value: parseInt(7)
    },
    {
        rank: "8",
        suite: `<i class="fa-solid fa-clover"></i>`,
        value: parseInt(8)
    },
    {
        rank: "9",
        suite: `<i class="fa-solid fa-clover"></i>`,
        value: parseInt(9)
    },
    {
        rank: "10",
        suite: `<i class="fa-solid fa-clover"></i>`,
        value: parseInt(10)
    },
    {
        rank: "J",
        suite: `<i class="fa-solid fa-clover"></i>`,
        value: parseInt(10)
    },
    {
        rank: "Q",
        suite: `<i class="fa-solid fa-clover"></i>`,
        value: parseInt(10)
    },
    {
        rank: "K",
        suite: `<i class="fa-solid fa-clover"></i>`,
        value: parseInt(10)
    },
    {
        rank: "A",
        suite: `<i class="fa-solid fa-clover"></i>`,
        value: parseInt(11)
    },
    {
        rank: "2",
        suite: `<i class="fa-solid fa-heart"></i></i>`,
        value: parseInt(2)
    },
    {
        rank: "3",
        suite: `<i class="fa-solid fa-heart"></i>`,
        value: parseInt(3)
    },
    {
        rank: "4",
        suite: `<i class="fa-solid fa-heart"></i>`,
        value: parseInt(4)
    },
    {
        rank: "5",
        suite: `<i class="fa-solid fa-heart"></i>`,
        value: parseInt(5)
    },
    {
        rank: "6",
        suite: `<i class="fa-solid fa-heart"></i>`,
        value: parseInt(6)
    },
    {
        rank: "7",
        suite: `<i class="fa-solid fa-heart"></i>`,
        value: parseInt(7)
    },
    {
        rank: "8",
        suite: `<i class="fa-solid fa-heart"></i>`,
        value: parseInt(8)
    },
    {
        rank: "9",
        suite: `<i class="fa-solid fa-heart"></i>`,
        value: parseInt(9)
    },
    {
        rank: "10",
        suite: `<i class="fa-solid fa-heart"></i>`,
        value: parseInt(10)
    },
    {
        rank: "J",
        suite: `<i class="fa-solid fa-heart"></i>`,
        value: parseInt(10)
    },
    {
        rank: "Q",
        suite: `<i class="fa-solid fa-heart"></i>`,
        value: parseInt(10)
    },
    {
        rank: "K",
        suite: `<i class="fa-solid fa-heart"></i>`,
        value: parseInt(10)
    },
    {
        rank: "A",
        suite: `<i class="fa-solid fa-heart"></i>`,
        value: parseInt(11)
    },
    {
        rank: "2",
        suite: `<i class="fa-solid fa-diamond"></i>`,
        value: parseInt(2)
    },
    {
        rank: "3",
        suite: `<i class="fa-solid fa-diamond"></i>`,
        value: parseInt(3)
    },
    {
        rank: "4",
        suite: `<i class="fa-solid fa-diamond"></i>`,
        value: parseInt(4)
    },
    {
        rank: "5",
        suite: `<i class="fa-solid fa-diamond"></i>`,
        value: parseInt(5)
    },
    {
        rank: "6",
        suite: `<i class="fa-solid fa-diamond"></i>`,
        value: parseInt(6)
    },
    {
        rank: "7",
        suite: `<i class="fa-solid fa-diamond"></i>`,
        value: parseInt(7)
    },
    {
        rank: "8",
        suite: `<i class="fa-solid fa-diamond"></i>`,
        value: parseInt(8)
    },
    {
        rank: "9",
        suite: `<i class="fa-solid fa-diamond"></i>`,
        value: parseInt(9)
    },
    {
        rank: "10",
        suite: `<i class="fa-solid fa-diamond"></i>`,
        value: parseInt(10)
    },
    {
        rank: "J",
        suite: `<i class="fa-solid fa-diamond"></i>`,
        value: parseInt(10)
    },
    {
        rank: "Q",
        suite: `<i class="fa-solid fa-diamond"></i>`,
        value: parseInt(10)
    },
    {
        rank: "K",
        suite: `<i class="fa-solid fa-diamond"></i>`,
        value: parseInt(10)
    },
    {
        rank: "A",
        suite: `<i class="fa-solid fa-diamond"></i>`,
        value: parseInt(11)
    },
    {
        rank: "2",
        suite: `<i class="fa-brands fa-canadian-maple-leaf"></i>`,
        value: parseInt(2)
    },
    {
        rank: "3",
        suite: `<i class="fa-brands fa-canadian-maple-leaf"></i>`,
        value: parseInt(3)
    },
    {
        rank: "4",
        suite: `<i class="fa-brands fa-canadian-maple-leaf"></i>`,
        value: parseInt(4)
    },
    {
        rank: "5",
        suite: `<i class="fa-brands fa-canadian-maple-leaf"></i>`,
        value: parseInt(5)
    },
    {
        rank: "6",
        suite: `<i class="fa-brands fa-canadian-maple-leaf"></i>`,
        value: parseInt(6)
    },
    {
        rank: "7",
        suite: `<i class="fa-brands fa-canadian-maple-leaf"></i>`,
        value: parseInt(7)
    },
    {
        rank: "8",
        suite: `<i class="fa-brands fa-canadian-maple-leaf"></i>`,
        value: parseInt(8)
    },
    {
        rank: "9",
        suite: `<i class="fa-brands fa-canadian-maple-leaf"></i>`,
        value: parseInt(9)
    },
    {
        rank: "10",
        suite: `<i class="fa-brands fa-canadian-maple-leaf"></i>`,
        value: parseInt(10)
    },
    {
        rank: "J",
        suite: `<i class="fa-brands fa-canadian-maple-leaf"></i>`,
        value: parseInt(10)
    },
    {
        rank: "Q",
        suite: `<i class="fa-brands fa-canadian-maple-leaf"></i>`,
        value: parseInt(10)
    },
    {
        rank: "K",
        suite: `<i class="fa-brands fa-canadian-maple-leaf"></i>`,
        value: parseInt(10)
    },
    {
        rank: "A",
        suite: `<i class="fa-brands fa-canadian-maple-leaf"></i>`,
        value: parseInt(11)
    }
]

let i = 0;
let currentUserCards = [];
let currentCpuCards = [];

document.addEventListener("DOMContentLoaded", runGame);

function runGame() {

    hitButton.style.display = "inline";
    stayButton.style.display = "inline";
    i = 0;
    shuffle();

    if (fullDeck[51].rank === "A" && fullDeck[49].rank === "A") {
        fullDeck[51].value = 1;
    }

    if ((fullDeck[50].value + fullDeck[48].value) > 21) {
        if (fullDeck[50].rank === "A") {
            fullDeck[50].value = 1;
        } else if (fullDeck[48].rank === "A") {
            fullDeck[48].value = 1;
        }
    }

    document.getElementById("user").innerHTML = `
        <div class="cards">
            <p class="topLeft">${fullDeck[51].rank}</p>
            <p class="suite">${fullDeck[51].suite}</p>
            <p class="bottomRight">${fullDeck[51].rank}</p>
        </div>
        <div class="cards">
            <p class="topLeft">${fullDeck[49].rank}</p>
            <p class="suite">${fullDeck[49].suite}</p>
            <p class="bottomRight">${fullDeck[49].rank}</p>
        </div>`;
    currentUserCards = [fullDeck[51].value, fullDeck[49].value];

    document.getElementById("cpu").innerHTML = `
        <div class="cards" id="questionMark"><p id="questionMarkStyle" class="suite"><i class="fa-regular fa-circle-question"></i></p></div>
        <div class="cards">
            <p class="topLeft">${fullDeck[48].rank}</p>
            <p class="suite">${fullDeck[48].suite}</p>
            <p class="bottomRight">${fullDeck[48].rank}</p>
        </div>`;
    currentCpuCards = [fullDeck[50].value, fullDeck[48].value];
}

function shuffle() {

    fullDeck = fullDeck.sort(() => Math.random() - 0.5);

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

    if ((userScore > cpuScore) || (cpuScore > 21)) {
        alert("You win!");
        incrementUserPoints();
    } else if (userScore === cpuScore) {
        alert("Draw!");
    } else {
        alert("Computer wins!");
        incrementCpuPoints();
    }
}

function drawCards() {
    let userTable = document.getElementById("user").innerHTML;
    let newUserCard = fullDeck[i].value;
    currentUserCards.push(newUserCard);
    userTable += `
    <div class="cards">
        <p class="topLeft">${fullDeck[i].rank}</p>
        <p class="suite">${fullDeck[i].suite}</p>
        <p class="bottomRight">${fullDeck[i].rank}</p>
    </div>`
    document.getElementById("user").innerHTML = userTable;
    i++;

    let userScore = 0;
    for (let x = 0; x < currentUserCards.length; x++) {
        userScore += parseInt(currentUserCards[x]);
        if (userScore > 21) {
            for (let y = 0; y < currentUserCards.length; y++) {
                if (currentUserCards[y] === 11) {
                    currentUserCards[y] = 1;
                }
            }
        }
    }
}

function cpuDraw() {
    let cpuTable = document.getElementById("cpu").innerHTML;
    let newCpuCard = fullDeck[i].value;
    currentCpuCards.push(newCpuCard);
    cpuTable += `
    <div class="cards">
        <p class="topLeft">${fullDeck[i].rank}</p>
        <p class="suite">${fullDeck[i].suite}</p>
        <p class="bottomRight">${fullDeck[i].rank}</p>
    </div>`
    document.getElementById("cpu").innerHTML = cpuTable;
    i++;

    let cpuScore = 0;
    for (let u = 0; u < currentCpuCards.length; u++) {
        cpuScore += parseInt(currentCpuCards[u]);
        if (cpuScore > 21) {
            for (let v = 0; v < currentCpuCards.length; v++) {
                if (currentCpuCards[v] === 11) {
                    currentCpuCards[v] = 1;
                }
            }
        }
    }
}

function incrementUserPoints() {
    let userPoints = parseInt(document.getElementById("userPoints").innerText);
    document.getElementById("userPoints").innerText = ++userPoints;
}

function incrementCpuPoints() {
    let cpuPoints = parseInt(document.getElementById("cpuPoints").innerText);
    document.getElementById("cpuPoints").innerText = ++cpuPoints;
}

function checkBust() {
    let userScore = 0;
    for (let e = 0; e < currentUserCards.length; e++) {
        userScore += parseInt(currentUserCards[e]);
        if (userScore > 21) {
            bust();
        }
    }
}

function bust() {
    alert("Bust!");
    document.getElementById("questionMark").innerHTML = `
        <p class="topLeft">${fullDeck[50].rank}</p>
        <p class="suite">${fullDeck[50].suite}</p>
        <p class="bottomRight">${fullDeck[50].rank}</p>`;
    incrementCpuPoints();
    hitButton.style.display = "none";
    stayButton.style.display = "none";
}

function stayButtonAction() {
    document.getElementById("questionMark").innerHTML = `
        <p class="topLeft">${fullDeck[50].rank}</p>
        <p class="suite">${fullDeck[50].suite}</p>
        <p class="bottomRight">${fullDeck[50].rank}</p>`;
    let userScore = 0;
    for (let e = 0; e < currentUserCards.length; e++) {
        userScore += parseInt(currentUserCards[e]);
    }
    let cpuScore = parseInt(currentCpuCards[0]) + parseInt(currentCpuCards[1]);
    while (cpuScore < userScore) {
        cpuDraw();
        cpuScore += parseInt(currentCpuCards[(currentCpuCards.length - 1)]);
        if (cpuScore > 21) {
            for (let t = 0; t < currentCpuCards.length; t++) {
                if (currentCpuCards[t] === 11) {
                    currentCpuCards[t] = 1;
                    cpuScore = 0;
                    for (let r =0; r < currentCpuCards.length; r++) {
                        cpuScore += parseInt(currentCpuCards[r]);
                    }
                }
            }
        }

    }
    checkResult();
    hitButton.style.display = "none";
    stayButton.style.display = "none";
}

/* button listeners below */
let hitButton = document.getElementById("hit");
hitButton.addEventListener("click", function () {
    drawCards();
    checkBust();
});

let stayButton = document.getElementById("stay");
stayButton.addEventListener("click", stayButtonAction);

let newGameButton = document.getElementById("newGame");
newGameButton.addEventListener("click", runGame);