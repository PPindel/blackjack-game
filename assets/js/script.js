/*jshint esversion: 6 */

/**
 * The main game function activated at the start of each deal
 */
function runGame() {

    hitButton.style.display = "inline";
    stayButton.style.display = "inline";
    newGameButton.style.display = "none";
    document.getElementById("hit").focus();
    document.getElementById("userPoints").innerText = savedScore.gamesWon;
    document.getElementById("cpuPoints").innerText = savedScore.gamesLost;
    i = 0;
    shuffle();

    // bust protection in case of 2 Aces at the start
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
    document.getElementById("userHand").innerHTML = fullDeck[51].value + fullDeck[49].value;

    document.getElementById("cpu").innerHTML = `
        <div class="cards" id="questionMark"><p id="questionMarkStyle" class="suite"><i class="fa-regular fa-circle-question"></i></p></div>
        <div class="cards">
            <p class="topLeft">${fullDeck[48].rank}</p>
            <p class="suite">${fullDeck[48].suite}</p>
            <p class="bottomRight">${fullDeck[48].rank}</p>
        </div>`;
    currentCpuCards = [fullDeck[50].value, fullDeck[48].value];
    document.getElementById("cpuHand").innerHTML = `<i class="fa-solid fa-question"></i> + ${fullDeck[48].value}`;
}

/**
 * Deck shuffle function using sord and Math.random function
 */
function shuffle() {

    //important loop to put Ace value back to 11 after taking 2 Aces at the start
    for (let card = 0; card < fullDeck.length; card++) {
        if (fullDeck[card].rank === "A") {
            fullDeck[card].value = 11;
        }
    }

    fullDeck = fullDeck.sort(() => Math.random() - 0.5);

}

/**
 * Comparing user's and dealer's results to check who wins
 */
function checkResult() {
    let userScore = 0;
    let cpuScore = 0;
    for (let c = 0; c < currentUserCards.length; c++) {
        userScore += parseInt(currentUserCards[c]);
    }
    //console.log("User score: " + userScore); /* Testing */
    document.getElementById("userHand").innerHTML = userScore;

    for (let d = 0; d < currentCpuCards.length; d++) {
        cpuScore += parseInt(currentCpuCards[d]);
    }
    //console.log("CPU score: " + cpuScore); /* Testing */
    document.getElementById("cpuHand").innerHTML = cpuScore;

    //alert (modal) based on result
    if ((userScore > cpuScore) || (cpuScore > 21)) {
        setTimeout(function () {
            winModalToggle();
        }, 500);
        incrementUserPoints();
    } else if (userScore === cpuScore) {
        setTimeout(function () {
            drawModalToggle();
        }, 500);
    } else {
        setTimeout(function () {
            dealerWinsModalToggle();
        }, 500);
        incrementCpuPoints();
    }
}

/**
 * Takes another card from pile to user's hand
 */
function drawCards() {
    let userTable = document.getElementById("user").innerHTML;
    let newUserCard = fullDeck[i].value;
    currentUserCards.push(newUserCard);
    userTable += `
    <div class="cards">
        <p class="topLeft">${fullDeck[i].rank}</p>
        <p class="suite">${fullDeck[i].suite}</p>
        <p class="bottomRight">${fullDeck[i].rank}</p>
    </div>`;
    document.getElementById("user").innerHTML = userTable;
    i++;

    let userScore = 0;
    for (let x = 0; x < currentUserCards.length; x++) {
        userScore += parseInt(currentUserCards[x]);
        document.getElementById("userHand").innerHTML = userScore;
        if (userScore > 21) {
            for (let y = 0; y < currentUserCards.length; y++) {
                if (currentUserCards[y] === 11) {
                    currentUserCards[y] = 1;
                    let userScore = 0;
                    for (let h = 0; h < currentUserCards.length; h++) {
                        userScore += parseInt(currentUserCards[h]);
                        document.getElementById("userHand").innerHTML = userScore;
                    }
                }
            }
        }
    }
}

/**
 * Takes another card from pile to dealer's hand
 */
function cpuDraw() {
    let cpuTable = document.getElementById("cpu").innerHTML;
    let newCpuCard = fullDeck[i].value;
    currentCpuCards.push(newCpuCard);
    cpuTable += `
    <div class="cards">
        <p class="topLeft">${fullDeck[i].rank}</p>
        <p class="suite">${fullDeck[i].suite}</p>
        <p class="bottomRight">${fullDeck[i].rank}</p>
    </div>`;
    document.getElementById("cpu").innerHTML = cpuTable;
    i++;
}

/**
 * Increments user's score
 */
function incrementUserPoints() {
    let userPoints = parseInt(document.getElementById("userPoints").innerText);
    document.getElementById("userPoints").innerText = ++userPoints;
    savedScore.gamesWon++;
    localStorage.setItem(savedScore, JSON.stringify(savedScore));
    //console.log(JSON.parse(localStorage.getItem(savedScore)));
}

/**
 * Increments dealer's score
 */
function incrementCpuPoints() {
    let cpuPoints = parseInt(document.getElementById("cpuPoints").innerText);
    document.getElementById("cpuPoints").innerText = ++cpuPoints;
    savedScore.gamesLost++;
    localStorage.setItem(savedScore, JSON.stringify(savedScore));
    //console.log(JSON.parse(localStorage.getItem(savedScore)));
}

/**
 * Bust check - if the user's hand points are over 21 dealer's win
 */
function checkBust() {
    let userScore = 0;
    for (let e = 0; e < currentUserCards.length; e++) {
        userScore += parseInt(currentUserCards[e]);
        if (userScore > 21) {
            bust();
        }
    }
}

/**
 * The hidden card is revealed and user's lost
 */
function bust() {
    document.getElementById("questionMark").innerHTML = `
        <p class="topLeft">${fullDeck[50].rank}</p>
        <p class="suite">${fullDeck[50].suite}</p>
        <p class="bottomRight">${fullDeck[50].rank}</p>`;

    document.getElementById("cpuHand").innerHTML = fullDeck[50].value + fullDeck[48].value;
    incrementCpuPoints();
    hitButton.style.display = "none";
    stayButton.style.display = "none";
    newGameButton.style.display = "inline";
    document.getElementById("newGame").focus();
    setTimeout(function () {
        bustModalToggle();
    }, 500);
}

/**
 * When user is taking no more cards, computer compares the hands and drawing cards until win, draw or bust
 */
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
        if (cpuScore + parseInt(currentCpuCards[(currentCpuCards.length - 1)]) > 21) {
            for (let t = 0; t < currentCpuCards.length; t++) {
                if (currentCpuCards[t] === 11) {
                    currentCpuCards[t] = 1;
                    cpuScore = 0;
                }
            }

            for (let r = 0; r < currentCpuCards.length; r++) {
                cpuScore += parseInt(currentCpuCards[r]);
            }

        } else {
            cpuScore += parseInt(currentCpuCards[(currentCpuCards.length - 1)]);
        }
    }
    checkResult();
    hitButton.style.display = "none";
    stayButton.style.display = "none";
    newGameButton.style.display = "inline";
    document.getElementById("newGame").focus();
}

// Local storage

if (JSON.parse(localStorage.getItem(savedScore)) !== null) {
    savedScore = JSON.parse(localStorage.getItem(savedScore));
}


// Modals

function winModalToggle() {
    winModal.style.display = "block";
}

winClose.onclick = function () {
    winModal.style.display = "none";
};

function dealerWinsModalToggle() {
    dealerWinsModal.style.display = "block";
}

dealerWinsClose.onclick = function () {
    dealerWinsModal.style.display = "none";
};

function drawModalToggle() {
    drawModal.style.display = "block";
}

drawClose.onclick = function () {
    drawModal.style.display = "none";
};

function bustModalToggle() {
    bustModal.style.display = "block";
}

bustClose.onclick = function () {
    bustModal.style.display = "none";
};

infoBtn.onclick = function () {
    infoModal.style.display = "block";
};

infoClose.onclick = function () {
    infoModal.style.display = "none";
};

window.onkeydown = function () {
    winModal.style.display = "none";
    dealerWinsModal.style.display = "none";
    drawModal.style.display = "none";
    bustModal.style.display = "none";
    infoModal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target === winModal) {
        winModal.style.display = "none";
    } else if (event.target === dealerWinsModal) {
        dealerWinsModal.style.display = "none";
    } else if (event.target === drawModal) {
        drawModal.style.display = "none";
    } else if (event.target === bustModal) {
        bustModal.style.display = "none";
    } else if (event.target === infoModal) {
        infoModal.style.display = "none";
    }
};

/**
 * Toggles on instructions how to play the game
function toggleInfo() {
    let infoText = document.getElementById("instructions");
    if (infoText.style.display === "block") {
        infoText.style.display = "none";
    } else {
        infoText.style.display = "block";
    }
}*/

// Button listeners
hitButton.addEventListener("click", function () {
    drawCards();
    checkBust();
});

stayButton.addEventListener("click", stayButtonAction);

newGameButton.addEventListener("click", runGame);

/* old info button
let infoButton = document.getElementById("infoButton");
infoButton.addEventListener("click", toggleInfo); */

document.addEventListener("DOMContentLoaded", runGame);