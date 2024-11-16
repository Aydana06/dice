var diceDom = document.querySelector(".dice");
var activePlayer;
var scores;
var roundScore;
//togloom duussan esehiig hadgalah tolobiin hubsagch
var isNewGame;

//Toglogchiin eeljiig hadgalah, 1-r toglogchiig 0, 2-r toglogchiig 1 gej temdegleh bolno
// var activePlayer = 0;
//Toglogchdiin tsugluulsan onoog hadgalah
// var scores = [0, 0];
// //Toglogchiin eeljindee tsugluulj bga onoog hadgalah hubisagch
// var roundScore = 0;
// //Dice ali talaaraa buusniig hadgalah hubisagch heregtey, 1-6 gesen utgiig ene hubisagchid randomoor uusgej ugnu
// var diceNumber = Math.floor(Math.random() * 6) + 1;
//<div class="player-score" id="score-0">43</div>
//DOM haij oloh querySelector  43 = textContent
// window.document.querySelector('#score-0').textContent = dice;

// document.querySelector('#score-1').innerHTML = "<em>Yes!<em>";
//Program ehlehed:
// document.getElementById("score-0").textContent = "0";
// document.getElementById("score-1").textContent = "0";

// document.getElementById("current-0").textContent = "0";
// document.getElementById("current-1").textContent = "0";
// diceDom.style.display = "none";
initGame();

function initGame(){
    //togloom ehellee gedeg tolobt oruulna
    isNewGame = true;
    activePlayer = 0;
    scores = [0, 0];
    roundScore = 0;
    diceNumber = Math.floor(Math.random() * 6) + 1;

    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";

    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";

    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");

    diceDom.style.display = "none";
}


//Shoog shideh event listener
document.querySelector(".btn-roll").addEventListener("click", function(){
    if(isNewGame){
        //1-6 hurtel sanamsargui neg too gargaj abna
        var diceNumber = Math.floor(Math.random() * 6) + 1;

        //shoonii zurgiig web deer gargaj irne
        diceDom.style.display = "block";
        //buusan sanamsargui toond hargalzah shooni zurgiig web deer gargaj irne
        diceDom.src = "./img/dice-" + diceNumber + ".png" ;

        //Buusan too ni 1 ees yalgaatay bol active playeriin eeljiin onoog nemegduulne

        if(diceNumber != 1){
            roundScore = roundScore + diceNumber;
            document.getElementById("current-" + activePlayer).textContent = roundScore;
        }else{
            switchToNextPlayer(); 
        }
    }else{
        alert("New товчыг дарж тоглоомыг шинээр эхлүүлнэ үү.");
    }
});


//Hold button EventListener:

document.querySelector(".btn-hold").addEventListener("click", function(){
    //ug toglogchiin tsugluulsan eljiin onoog global onoon deer ni nemj ugnu
    if(isNewGame){
        scores[activePlayer] = scores[activePlayer] + roundScore;

        document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];
        //ug toglogch hojson esehiig shalgah
        if(scores[activePlayer] >= 10){
        //togloomiig dussan tolobt oruulna.
        isNewGame = false;

        document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
        document.querySelector(".player-"+ activePlayer + "-panel").classList.add("winner");
        document.querySelector(".player-"+ activePlayer + "-panel").classList.remove("active");
        }else{
            switchToNextPlayer();
        }
    }else{
        alert("New товчыг дарж тоглоомыг шинээр эхлүүлнэ үү.");
    }

    //delgets deer bga onoog uurchilnu

    //eeljiin onoog ni 0 bolgono;
    //Toglogchiin eljiig solino
});

function switchToNextPlayer(){
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    diceDom.style.display = "none";
};

//toggle: active class baih yum bol nemne, baihgui bol ustgana

//shine togloom ehluuleh tobchnii Event Listener

document.querySelector(".btn-new").addEventListener("click", initGame);


