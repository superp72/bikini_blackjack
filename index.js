//Dealing a card

 var randomCard = Math.floor(Math.random()*52+1);
console.log("I got the card "+randomCard);

var score = Math.floor(Math.random()*52+1);

function findSuit() {
    if (score <= 13){return "Hearts";}
    else if(score <= 26){return "Diamonds";}
    else if(score <= 39){return "Clubs";}
    else {return "Spades";}
}

var card = score % 13;

console.log("You got a " + card + " of " + findSuit());

//still need to work out say "12 of Hearts"