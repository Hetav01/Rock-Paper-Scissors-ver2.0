const game = () => /*new method of coding...reduces the code substaintially and easier to debug.*/ {
    let pScore = 0;
    let cScore = 0;

    // Puru(P): number matches to play to see best of
    let bestOf = 1;

    // P: total matches played till now
    let total = 0;

    const startDisplay = () => {
        const playButton = document.querySelector(".playButton");
        const introScreen = document.querySelector(".intro");
        const matchScreen = document.querySelector(".match");
        const optionSelect = document.querySelector(".selectNumber");

        // P: get number of matches to play
        bestOf = parseInt(optionSelect.options[optionSelect.selectedIndex].text);

        playButton.addEventListener("click", function () {
            introScreen.classList.add("fadeOut");
            matchScreen.classList.add("fadeIn");
        });
    }

    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".playerHand");
        const computerHand = document.querySelector(".computerHand");
        const resetButton = document.querySelector(".resetButton");
        const computerOptions = ["rock", "paper", "scissors"];
        const hands = document.querySelectorAll(".hands img");
        //now we need to remove the animation from the rock paper and scissors after it ends;
        hands.forEach(function (hand) {
            hand.addEventListener("animationend", function () {
                this.style.animation = '';
            });
        });

        options.forEach(function (option) {
            option.addEventListener("click", function () {
                var randomNum = Math.floor(Math.random() * computerOptions.length);
                const computerNumber = computerOptions[randomNum];
                setTimeout(() => {
                    compareHands(this.textContent, computerNumber);
                    //update the images.
                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerNumber}.png`;
                }, 1000);
                //adding the animations.
                playerHand.style.animation = "shakey 1s ease";
                computerHand.style.animation = "shakeyComp 1s ease";

            });
        });
        resetButton.addEventListener("click", function () {
            const playNum = document.querySelector(".playerNum");
            const compNum = document.querySelector(".computerNum");
            compNum.textContent = 0;
            playNum.textContent = 0;
        });
    }

    const updateScore = () => {
        const playNum = document.querySelector(".playerNum");
        const compNum = document.querySelector(".computerNum");
        compNum.textContent = cScore;
        playNum.textContent = pScore;

        // P: increase number of total matches played till now
        total = total + 1;

        // P: check if total matches == best of 
        if (total >= bestOf) {
            console.log('number of matches has ended. show some other screen with final result');
            // number of matches has ended. show some other screen with final result
        }
    }

    const compareHands = (playerChoice, computerChoice) => {
        let winner = document.querySelector(".winner");
        if (playerChoice === computerChoice) {
            winner.textContent = "It is a Tie!!";
            return;
        }
        if (playerChoice === "rock") //checck for the individual elements.
        {
            if (computerChoice === "paper") {
                winner.textContent = "You lost ;)";
                cScore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = "You Won :)";
                pScore++;
                updateScore();
                return;
            }
        }
        if (playerChoice === "scissors") //checck for the individual elements.
        {
            if (computerChoice === "paper") {
                winner.textContent = "You Won :)";
                pScore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = "You lost ;)";
                cScore++;
                updateScore();
                return;
            }
        }
        if (playerChoice === "paper") //checck for the individual elements.
        {
            if (computerChoice === "rock") {
                winner.textContent = "You Won :)";
                pScore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = "You lost ;)";
                cScore++;
                updateScore();
                return;
            }
        }
    }
    //call all the inner functions
    playMatch();
    startDisplay();
}

game();
