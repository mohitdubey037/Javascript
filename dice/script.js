var scores, roundscores, activeplayer, gameplaying;

init();

// document.querySelector('#current--' + activeplayer).textContent = dice;

// var x = document.querySelector('#score--0').textContent;

// console.log(x);

document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn--roll').addEventListener('click', function () {
    if (gameplaying) {
        var dice;
        //1. Display some random no.
        dice = Math.floor(Math.random() * 6) + 1;
    
        //2. Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
    
        //3. update the round scrore if the nmber was not 1
        if (dice !== 1) {
            //add score
            roundscores += dice;
            document.getElementById("current--" + activeplayer).textContent = roundscores;
        }
        else {
            //next player
            nextPlayer();
        }
    }
})


document.querySelector('.btn--hold').addEventListener('click', function () {
    if (gameplaying){
        // Add current score to global score
        scores[activeplayer] += roundscores;
    
        // update the UI
        document.querySelector("#score--" + activeplayer).textContent = scores[activeplayer];
    
        // check if player won the game
        if (scores[activeplayer] >= 20) {
            document.getElementById("name--" + activeplayer).textContent = 'WINNER';
            document.querySelector(".dice").style.display = "none";
            document.querySelector(".player--" + activeplayer).classList.add("player--winner");
            document.querySelector(".player--" + activeplayer).classList.remove("activeplayer");
            gameplaying = false;
        }
        else {
            nextPlayer();
        }
    }
})

document.querySelector(".btn--new").addEventListener('click', init);

function nextPlayer() {
    activeplayer === 0 ? activeplayer = 1 : activeplayer = 0;
    roundscores = 0;
    document.getElementById("current--0").textContent = '0'
    document.getElementById("current--1").textContent = '0'
    document.querySelector(".player--0").classList.toggle('player--active');
    document.querySelector(".player--1").classList.toggle('player--active');
    document.querySelector(".dice").style.display = "none";
}

function init() {
    scores = [0, 0];
    roundscores = 0;
    activeplayer = 0;
    gameplaying=true;

    document.getElementById('score--0').textContent = '0'
    document.getElementById('score--1').textContent = '0'
    document.getElementById('current--0').textContent = '0'
    document.getElementById('current--1').textContent = '0'
    document.getElementById("name--0").textContent = 'player-1';
    document.getElementById("name--1").textContent = 'player-2';
    document.querySelector(".player--0").classList.remove("player--winner");
    document.querySelector(".player--1").classList.remove("player--winner");
    document.querySelector(".player--0").classList.remove("activeplayer");
    document.querySelector(".player--1").classList.remove("activeplayer");
    document.querySelector(".player--0").classList.add("activeplayer");

}