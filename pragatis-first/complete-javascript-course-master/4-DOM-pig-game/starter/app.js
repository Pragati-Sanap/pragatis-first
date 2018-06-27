/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
/*

var scores,roundScore,activePlayer,gamePlaying;
init();

document.querySelector(".btn-roll").addEventListener('click',function(){
    
    if(gamePlaying){
         //1.create a random number
    var dice = Math.floor(Math.random() * 6) + 1;
    
    var diceDOM = document.querySelector('.dice');
    //2.display current value
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-'+dice+'.png';
    
    //3.Update the roundScore and discard if dice value = 1
    
    if(dice !== 1){
        //add score
        roundScore +=dice;
        document.querySelector("#current-"+activePlayer).textContent = roundScore;
    }
    else{
        //next player
         nextPlayer();
        
        }
    }
    else{
        
    }
   

});

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
         //update current Score to global score
    scores[activePlayer] += roundScore;
        
    //update the UI
    document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
    
    //check if player win the game
    if(scores[activePlayer]>=20){
        document.querySelector('#name-'+activePlayer).textContent='Winner!!';
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        gamePlaying = false;

    }
    else{
         //next player
    nextPlayer();
    }
    }
   
   
});

function nextPlayer(){
activePlayer===0 ? activePlayer = 1 :activePlayer = 0;
        roundScore=0;
        
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');
        
        document.querySelector('.dice').style.display='none';
        
}

document.querySelector('.btn-new').addEventListener('click',init);

function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector(".dice").style.display = 'none';


    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    
    document.querySelector('#name-0').textContent='Player-1';
    document.querySelector('#name-1').textContent='Player-2';
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
  
    
    
}
//document.querySelector("#current-"+activePlayer).textContent = dice;
//document.querySelector('#current-'+activePlayer).innerHTML='<em>'+dice+'</em>';
//var x = document.querySelector('#score-1').textContent;

*/
//**************challenges 3************//
/*

1.A player looses his entire score when he rolls two 6 in a row .After that,it's the next players turn(hint:Always save the previous dice roll output in a seprate variable )

2. Add input field to the html where players can set the winning score , so they can change the predefined score of 100(hint: you can read that value using .value property in javascript .)

3.Add another dice to the game ,so that there are two dices now.The player looses his current score when one of them is 1.(hint: you will need css to position the second dice,so take look at CSS code for the first one.)
*/



var scores,roundScore,activePlayer,gamePlaying,lastDice;
init();

document.querySelector(".btn-roll").addEventListener('click',function(){
    
    if(gamePlaying){
         //1.create a random number
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    
    var diceDOM = document.querySelector('.dice');
    var dice2DOM = document.querySelector('.dice2');
    //2.display current value
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-'+dice1+'.png';
        
    dice2DOM.style.display = 'block';
    dice2DOM.src = 'dice-'+dice2+'.png';
    
    //3.Update the roundScore and discard if dice value = 1
        if(dice1 === 1 && dice2 ===1){
            //roundScore=0;
            document.querySelector('#current-'+activePlayer).textContent='0';
            nextPlayer();
        }
        else if(dice1 !== 1 && dice2 !== 1){
                //add score
                totalScore=dice1+dice2;
                roundScore +=totalScore;
                document.querySelector("#current-"+activePlayer).textContent = roundScore;
            }
       else{
        //next player
         nextPlayer();
        
        }
    /*        if(lastDice===6 && dice===6){
    
        scores[activePlayer]=0;
        document.querySelector('#score-'+activePlayer).textContent='0';
        nextPlayer();
       
        }
          else{
        //next player
         nextPlayer();
        
        }
        */
        
   
       lastDice=dice;
    }
   

});

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
         //update current Score to global score
    scores[activePlayer] += roundScore;
        
    //update the UI
    document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
    
    var input = document.querySelector('.final-score').value;
       var winningScore;
        if(input){
            winningScore=input;
        }
        else{winningScore=100;
            }
    //check if player win the game
    if(scores[activePlayer]>=winningScore){
        document.querySelector('#name-'+activePlayer).textContent='Winner!!';
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        gamePlaying = false;

    }
    else{
         //next player
    nextPlayer();
    }
    }
   
   
});

function nextPlayer(){
activePlayer===0 ? activePlayer = 1 :activePlayer = 0;
        roundScore=0;
        
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');
        
        document.querySelector('.dice').style.display='block';
        
}

document.querySelector('.btn-new').addEventListener('click',init);

function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector(".dice").style.display = 'block';


    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    
    document.querySelector('#name-0').textContent='Player-1';
    document.querySelector('#name-1').textContent='Player-2';
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
  
   // winningScore= prompt('Enter the Winning score');
    
}



