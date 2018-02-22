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
 console.log("Random number is " + randomNumber);

 //Create for each crystal  random hidden value between 1-12
   var one  = Math.floor(Math.random()* 10 +2 )
   var two = Math.floor(Math.random()* 10 + 2 )
   var three = Math.floor(Math.random()*10 +2 )
   var four =Math.floor(Math.random()* 10 +2 )

   //At the begining of the game wins, losses and total score always = 0
   var wins = 0;
   var losses = 0;
   var totalScoreNumber = 0;
 
   //Send values at the begining of the game to html  
   $ ('#win-counter').text(wins);
   $('#losses-counter').text(losses);
   $('#scoreNumber').text(totalScoreNumber);

   function reset() {
       //Reset Total Score Number to 0
       $("#scoreNumber").text(totalScoreNumber= 0);
       console.log("Reset totalScoreNumber " + totalScoreNumber);

       //Creates random number at  class="All"
       randomNumber = Math.floor(Math.random()* 101 + 19);
       console.log("Reset Random number for 'All' is " + randomNumber);

       // Display random number on the html
       $("#random-number").text(randomNumber);

       //Create new random number for crystals
       one  = Math.floor(Math.random()* 10 +2 );
       two = Math.floor(Math.random()* 10 + 2 );
       three = Math.floor(Math.random()*10 +2 );
       four =Math.floor(Math.random()* 10 +2 );      


   }

            // add wins to win-counter
        
        function win(){
           
            wins++;
            $("#win-counter").text(wins);
            $("#alert").text("You won!");
            totalScoreNumber = 0;
            alert("You won!");
            
            reset();

        }

        // add losses to losses-counter

        function lose(){
           
            losses++;
            $("#losses-counter").text(losses);
            $("#alert").text("You lose.");
            totalScoreNumber = 0;
            alert("You lose");
            
            reset();
        }

  

  //Clicks for cristals
  $("#one1").on ('click',function(){
       //Adds random number for this cristal to totalScoreNumber
        totalScoreNumber  = totalScoreNumber  + one;
        console.log("Random number of cristal1 = " + one); 
        //Send totalScoreNumber to html
        $('#scoreNumber').text(totalScoreNumber);
        console.log("User totalScoreNumber1 html = " + totalScoreNumber ); 
        //set win and lose conditions
        if (totalScoreNumber  == randomNumber){ 
            win ();
           
        }
        else if (totalScoreNumber > randomNumber){ 
            lose();
           
        }
  })

  $("#two2").on ('click',function(){
        totalScoreNumber  = totalScoreNumber  + two;
        console.log("Random number of cristal2 = " + two ); 
        $('#scoreNumber').text(totalScoreNumber);
        console.log("User totalScoreNumber2 html= " + totalScoreNumber ); 
        //set win and lose conditions
        if (totalScoreNumber  == randomNumber){
            win ();
        }
        else if (totalScoreNumber > randomNumber){
            lose();
        }
    })

     $("#three3").on ('click',function(){
        totalScoreNumber  = totalScoreNumber  + three;
        console.log( "Random number of cristal3 = " + three);  
        $('#scoreNumber').text(totalScoreNumber);
        console.log("User totalScoreNumber3 html= " + totalScoreNumber ); 
         //set win and lose conditions
         if (totalScoreNumber  == randomNumber){
            win ();
         }
         else if (totalScoreNumber > randomNumber){
             lose();
         }

    })

    $("#four4").on ('click',function(){
        totalScoreNumber  = totalScoreNumber  + four;
        console.log("Random number of cristal4 = " + four); 
        $('#scoreNumber').text(totalScoreNumber);
        console.log("User totalScoreNumber4= " + totalScoreNumber ); 
        //set win and lose conditions
         if (totalScoreNumber  == randomNumber){
            win ();
         }
         else if (totalScoreNumber > randomNumber){
             lose();
         }

    })
 
 

});
