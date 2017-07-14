/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.

   assert(["2", "2", "8"], 12);
   assert(["2", "2", "K"], 14);
   assert(["2", "Q"], 12);
   assert(["7", "J"], 17);
   assert(["7", "A"], 18);
   assert(["8", "J", "A"], 19);
   assert(["8", "A", "J"], 19);
   assert(["8", "7", "A", "A"], 17);
   assert(["K", "A"], 21);

   //Assumptions are that I know i will have an aray of characters that represent cards
   in the hand paramenter.
   // 1.  Loop over the hand array and calculate the value of each card.
   for (let i = 0; i < hand.length; i++) {
    let card = hand[i];
   if card === "K" || card === "Q" || card ==="J"){
   }
 }
 }
   //2. if car is K, Q, J,  value is 10
   else if card === 'A' {
   }
   //3.  if card is A the value is 1 or 11
   //4.  else just use the face value of the card to add to the total.
   // If total is over 21, start changing aces to value 1;
   return;

  // NOTE2: parseInt takes a string and returns an integer;  parseInt(card)
 }
*/

function handValue (hand) {
  let total = 0;
  let aceCount = 0;
  for (let i=0; i < hand.length; i++) {
    let card = hand[i];
    if (card === "K" || card === "Q" || card = "J") {
        total += 10;

    } else if (card === "A") {
        total += 11;
        aceCount += 1;

    } else {
      total += parseInt(card);
    }
  }

while (total > 21 && aceCount > 0) {
  total += 10;
  aceCount += 1;
}
  return total;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
