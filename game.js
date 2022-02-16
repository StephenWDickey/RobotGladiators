// Robot Gladiators



// player names robot, gets starting attributes
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//enemy gets starting attributes
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


// fight variable
var fight = function(enemyName) {

    // we will repeat fight function as long as the following condition is true
    while (playerHealth > 0 && enemyHealth > 0) {
        
        // asks user to fight or skip
        var promptFight = window.prompt ("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        
        //player chooses to skip
        if (promptFight === "skip" || promptFight === "SKIP") {

            // confirm if user wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to skip this encounter?");

            // if true leave fight
            if (confirmSkip) {
                window.alert(playerName + " has chosen to skip the fight!");
    
                // skipping penalty, subtract user money
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }

        // subtract value of playerAttack from value of enemyHealth, update enemyHealth var
        enemyHealth = enemyHealth - playerAttack;
        
        // shows resulting message, note use of trailing and leading spaces
        console.log (playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining." );
        
        
        // check enemy health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            break;
        }
        else { 
            window.alert(enemyName + " still has " + enemyHealth + " health remaining.");
        }
        
        // subtract value of enemyAttack from playerHealth, update playerHealth var
        playerHealth = playerHealth - enemyAttack;
        
        // show resulting message
        console.log (enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
        
        // check player health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health remaining.");
        }
    }  
};



// this calls the fight function
// fight();
// We are replacing the above function call with a for loop

var endGame = function() {
    // if player is alive player wins
    if (playerHealth > 0) {
        window.alert("Your robot crushed its enemies and saw them driven before it! You have a score of " + playerMoney + ".");
    }
    else {
        window.alert("Though your robot fought bravely it has perished, it will be sold for scrap metal and you get no earnings. Goodbye.");
    }

    // ask player to play again
    var playAgainConfirm = window.confirm("Your robot hungers for more destruction, satiate its appetite?");
    if (playAgainConfirm) {
        // restart game
        startGame();
    }
    else {
        window.alert("Return to the battlegrounds soon.");
    }
};

var startGame = function() {

    // reset user stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            // tells user what round it is
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            // new enemy is picked based on index of enemyNames array
            var pickedEnemyName = enemyNames[i];
            // enemy health is reset at fight onset
            enemyHealth = 50;
            // pickedEnemyName variable is put into fight function
            fight(pickedEnemyName);
        }
        // game over message, code stops
        else {
            window.alert("Though your robot fought bravely it has perished, it will be sold for scrap metal and you get no earnings. Goodbye.");
            break;
        }
    }
    
    // if loop ends and player is out of health or enemies run endGame () 
    endGame();
};

// call the startGame function
startGame();


