//Dealing a card

//  var randomCard = Math.floor(Math.random()*52+1);
// console.log("I got the card "+randomCard);

// var score = Math.floor(Math.random()*52+1);

// function findSuit() {
//     if (score <= 13){return "Hearts";}
//     else if(score <= 26){return "Diamonds";}
//     else if(score <= 39){return "Clubs";}
//     else {return "Spades";}
// }

// var card = score % 13;

// console.log("You got a " + card + " of " + findSuit());

// //still need to work out say "12 of Hearts"
//still need to work out say "0 of Spades"
// Our deal function will return a random card
var deal = function() {
  card = Math.floor(Math.random()*52+1);
  return card;
};

// Deal out our first hand
var card1 = deal();
var card2 = deal();

// This function takes a card as a parameter and returns the value
// of that card
var getValue = function(card) {
  // if its a face card, number should be set to 10        
   if (card % 13 === 0 || card % 13 === 11 || card % 13 === 12) 
        {
            return 10;
        }
  // if it's an ace?
else if (card % 13 === 1)
        {
            return 11;
        }
  // Otherwise just want its number value
 else
        {
            return card %13;
        }  
    };
// Score the hand
function score() {
  return getValue(card1) + getValue(card2);
}

console.log("You have cards " + card1 + " and " + card2 +
        " for a score of " + score(card1, card2));