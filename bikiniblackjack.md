Welcome to Bikini Blackjack.

"Just making a change for Matts git video"

### Bikini Blackjack.

### Make a card with a unique identifier (going to need 52 of them (4 suits(13cards per suit))).
### Make a suit (13 Cards "A" "1" "2" "3" "4" "5" "6" "7" "8" "9" "10" "J" "Q" "K")
### Make a Deck of 52 cards.(4 suits(13cards per suit)
### ***might need colours***
### Each card needs a value: "A" = 1 || 11 ; "J" "Q" "K" = 10 ; all others face value.

### Need to work out betting: 
### Player placing a bet starts game.


### Shuffle the Deck & || Deal random cards:
### Player gets dealt a (Hand) comprising of 2 cards.
### Dealer gets dealt a (Hand) comprising of 2 cards. (Dealers first card not showing).
### Need to be able to Sum the Value of the Hand for player and dealer.
### Need a rule for the value of the cards =< 21 which is the aim of the game.
### Blckjack is Ace and card with a value of 10 and this wins the game unless Delear has the same = "STAND-OFF"
### if player has Blackjack and dealer does not, then player is paid 3/2 to the initial bet. 
### Player Pot of money is totalled.


### If player does not have Blackjack, it becomes the players turn.
### Player can choose to Hit/Stand/Surrender(Double/Split).
### If Player Hits they choose to add another card to their Hand.
### HandArray is then added, and calcualed to rule: (= 21 = Stand and reverts play to Delear: < 21 Player can choose again to Hit or Stand)
### Player continues play until their score is > 21 = "BUST" and dealer WINS. || =<21 & they choose to STAND.
### Dealer continues play to a rule: 
### Dealer 2nd card is shown and HandSum rule is applied to the DealersHand.
### When delearsHandSum is =>17 & =< 21 dealer must STAND.
### When dealearsHandSum is =<16 dealer must HIT and receive a new card.
### This repeats until delearsHandSum is either >21 which = "BUST" and player WINS || delearsHandSum is  =>17 & =< 21 which results in dealer STANDING.
### Once Delear STANDS =>17 & =< 21 delearsHandSum & playerHandSum are calcualed to verify if it is a draw "STAND-OFF" or the highest score is the Winner.
### Congratulations to the winner player or dealer.


### Make an Array - (1,2,3, .... 50,51,52)
### Develop Objects:
[1] - [13] = Hearts
[14] - [26] = Diamonds
[27] - [39] = Spades
[40] - [52] = Clubs

### Make a rule for [i] to have a value.
*** [i] %13 = 0 || > 10 equals a value of "10".
*** %13 = 1 this is an "A" & equals a value of 11 || 1 
*** initially equate value as 11
*** need rule for HandSum with that has "A" as part of the Array to 

###--->"Hearts" "Suit #1"<---###                  

#1. "Ace of Hearts" value = 1 || 11     
#2. "2 of Hearts" value = 2     
#3. "3 of Hearts" value = 3          
#4. "4 of Hearts" value = 4
#5. "5 of Hearts" value = 5
#6. "6 of Hearts" value = 6
#7. "7 of Hearts" value = 7
#8. "8 of Hearts" value = 8
#9. "9 of Hearts" value = 9
#10. "10 of Hearts" value = 10
#11. "Jack of Hearts" value = 10
#12. "Queen of Hearts" value = 10
#13. "King of Hearts" value = 10

###--->"Diamonds" "Suit #2"<---###
#14. "Ace of Diamonds" value = 1 || 11
#15. "2 of Diamonds" value = 2
#16. "3 of Diamonds" value = 3
#17. "4 of Diamonds" value = 4
#18. "5 of Diamonds" value = 5
#19. "6 of Diamonds" value = 6
#20. "7 of Diamonds" value = 7
#21. "8 of Diamonds" value = 8
#22. "9 of Diamonds" value = 9
#23. "10 of Diamonds" value = 10
#24. "Jack of Diamonds" value = 10
#25. "Queen of Diamonds" value = 10
#26. "King of Diamonds" value = 10

###--->"Spades" "Suit #3"<---###
#27. "Ace of Spades" value = 1 || 11
#28. "2 of Spades" value = 2
#29. "3 of Spades" value = 3
#30. "4 of Spades" value = 4
#31. "5 of Spades" value = 5
#32. "6 of Spades" value = 6
#33. "7 of Spades" value = 7
#34. "8 of Spades" value = 8
#35. "9 of Spades" value = 9
#36. "10 of Spades" value = 10
#37. "Jack of Spades" value = 10
#38. "Queen of Spades" value = 10
#39. "King of Spades" value = 10

###--->"Clubs" "Suit#4"<---###
#40. "Ace of Clubs" value = 1 || 11
#41. "2 of Clubs" value = 2
#42. "3 of Clubs" value = 3
#43. "4 of Clubs" value = 4
#44. "5 of Clubs" value = 5
#45. "6 of Clubs" value = 6
#46. "7 of Clubs" value = 7
#47. "8 of Clubs" value = 8
#48. "9 of Clubs" value = 9
#49. "10 of Clubs" value = 10
#50. "Jack of Clubs" value = 10
#51. "Queen of Clubs" value = 10
#52. "King of Clubs" value = 10


Constructed a "Deck of Cards" comprising of:
52 individual cards 
4 suits 
13 cards per suit
Each card is unique "#" and this can be used 
Each card has a unique label ie "King of Clubs"
Each card has a vlue.


Need to be able to shuffle the card to deal random card with a value 


This is from Code Accademy - Blackjack -> 
I worked through the quite a bit of Javascript, including a blackjack
eercise, and this was the code that got me all the way through and completed
the blackjack course.

 // Card Constructor
function Card (s, n) {
    var suit = s;
    var number = n;
    this.getNumber = function() {
        return number;
    };
    this.getSuit = function() {
        return suit;
    };
}
this.getValue = function(){
    if (number > 10)
    {return 10;} 
    else if (number === 1)
    {return 11;}
    else
    {return number;}   
}; 
var deal = function() {
    var cardSuit = Math.floor(Math.random()*4)+1;
    var cardNumber = Math.floor(Math.random()*13)+1;
    var card = new Card(cardSuit,cardNumber);

};
        
// var handSum = handSum () { 
    var cards  = [];
    cards[0] = deal();
    cards[1] = deal();
    var getHand = function(){
        return cards; };
    var handSum = function(){
        var sum = new Number (); 
        for (var i = 0; i <cards.length; i++){
            sum+= cards[i].getValue
            return sum; 
        };
    }
    this.printHand = function() {
    var string = "";
    for(i = 0 ; i < cards.length; i += 1){

        string += cards[i].getNumber() + 
            " of " + cards[i].getSuit();
        if(i < cards.length - 1){
            string += ", ";
        }
    }
    return string;
};
var hitMe = function(){
    var hitCard = deal(); 
    getHand().push(hitCard);
};
// trackAces

this.score = function() {
    var value = 0;
    var aces = 0;
    for (i=0; i < cards.length; i++) {
        value += cards[i].getValue;
        if (cards[i].getValue == 11) aces++;
    }
    while (value > 21 && aces > 0) {
    value -= 10;
    aces--;
    }
    return value;
};

var playAsDealer = function()
{
    var dealer = new Hand();
    while (dealer.score() <17){
        dealer.hitMe();
    }
};
    
var playAsUser = function () {
var userHand = userHand() {


var decision = confirm("Your hand is "+ userHand.printHand() + ": Hit OK to hit (take another card) or Cancel to stand");
while(decision) {
userHand.hitMe();
decision = confirm("Your hand is "+ userHand.printHand() + "Do you want to hit again?");
}
return userHand.score();
};

playAsUser();

function declareWinner(userHand,dealerHand){
var user = userHand.score();
var dealer = dealerHand.score();
if ((user > dealer || dealer > 21) && user <= 21){
return 'You win!';
}
else if ((user < dealer || user > 21) && dealer <= 21){
return 'You lose!';
}
else if (user === dealer || (user > 21 && dealer > 21)){
return 'You tied!';
}
}

declareWinner(playAsUser(),playAsDealer());

function playGame(){
playAsUser();
playAsDealer();
declareWinner(userHand,dealerHand);
console.log("Player's hand: " + userHand);
console.log("Dealer's hand: " + dealerHand);
console.log("Winner: " + declareWinner(playerHand, dealerHand));
}
playGame();// /* var randomScore = Math.floor(Math.random() * 52 + 1);
// // return card;

// console.log("I got the score "+randomScore);
// */
// // var randomRating =  Math.random(0,52);

// // var card = Math.floor(1,52);
// // console.log(card);
// // Our deal function will return a random card

//  var deal = function () {
//     card = Math.floor(Math.random()*52+1);
//     return card;
// };

// // Deal out our first hand
// var card1 = deal();
// var card2 = deal();
// // var card3 = deal(); 
// // var card4 = deal(); 
// // var card5 = deal(); 
// // var card6 = deal();  

// // console.log(card1, card2, card3, card4, card5, card6);




// // This function takes a card as a parameter and returns the value
// // of that card
// var getValue = function(card) {
//     // if its a face card, number should be set to 10
//     if( card %13 || card ===0 || card === 11 || card ===12 ) {
//         return(10)
//     }
//     else if (card %13 ===1)
//     	return(11)
//     // Otherwise number should be set to card modulo 13
//     else {
//         return card %13;
//     }
// };



// // Here make a function called score, which will assign points based
// // on the cards.  It should take the remainder
// var score = function() {
//     return getValue(card1) + getValue(card2);
// };

// console.log("You have cards " + card1 + " and " + card2 +
//         " for a score of " + score());
//         