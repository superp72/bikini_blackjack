/* var randomScore = Math.floor(Math.random() * 52 + 1);
// return card;

console.log("I got the score "+randomScore);
*/
// var randomRating =  Math.random(0,52);

// var card = Math.floor(1,52);
// console.log(card);
// Our deal function will return a random card

 var deal = function () {
    card = Math.floor(Math.random()*52+1);
    return card;
};

// Deal out our first hand
var card1 = deal();
var card2 = deal();
// var card3 = deal(); 
// var card4 = deal(); 
// var card5 = deal(); 
// var card6 = deal();  

// console.log(card1, card2, card3, card4, card5, card6);




// This function takes a card as a parameter and returns the value
// of that card
var getValue = function(card) {
    // if its a face card, number should be set to 10
    if( card %13 || card ===0 || card === 11 || card ===12 ) {
        return(10)
    }
    else if (card %13 ===1)
    	return(11)
    // Otherwise number should be set to card modulo 13
    else {
        return card %13;
    }
};



// Here make a function called score, which will assign points based
// on the cards.  It should take the remainder
var score = function() {
    return getValue(card1) + getValue(card2);
};

console.log("You have cards " + card1 + " and " + card2 +
        " for a score of " + score());
        