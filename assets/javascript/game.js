/*1. Create random number at the start of the game between 19-120
2. Create for each crystal  random hidden value between 1-12
3. When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
   Game will hide this amount until the player clicks a crystal.
4. When they do click one, update the player's score counter.
5. The player wins if their total score matches the random number from the beginning of the game.
6. The player loses if their score goes above the random number.
7. The game restarts whenever the player wins or loses.
When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
8. The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.*/


$(document).ready(function() {
    //Create random Number to start the game
 var randomNumber = Math.floor(Math.random()* 101 + 19)

 //Send random number to html
 $ ("#random-number").text(randomNumber);
 console.log(randomNumber);

 //Create for each crystal  random hidden value between 1-12
   var  one  = Math.floor(Math.random()* 10 +2 )
   var two = Math.floor(Math.random()* 10 + 2 )
   var three = Math.floor(Math.random()*10 +2 )
   var four =Math.floor(Math.random()* 10 +2 )

   //At the begining of the game wins, losses and total score always = 0
   var wins = 0;
   var losses = 0;
   var totalScoreNumber = 0;

   $ ('#win-counter').text(wins);
   $('#losses-counter').text(losses);
   $('#scoreNumber').text(totalScoreNumber);

  //Clicks for cristals
  $("#one1").on ('click',function(){
    totalScoreNumber  = totalScoreNumber  + one;
    console.log("User total Score= " + totalScoreNumber ); 
    $('#scoreNumber').text(totalScoreNumber);
     //set win and lose conditions
    console.log("User total Score= " + totalScoreNumber ); 
     if (totalScoreNumber  == randomNumber){
        win ();
     }
     else if (totalScoreNumber > randomNumber){
         lose();
     }
  })
 
  //add wins to the Tolas Score
  function win(){
      alert("You won!");
      wins++;
      $("win-counter").text(wins);
      reset();

  }


});