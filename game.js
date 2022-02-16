



// player names robot, gets starting attributes
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//enemy gets starting attributes
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;


// fight variable
var fight = function() {
    // tells players they are starting round
    window.alert ("Welcome to Robot Gladiators!");
    // new var gives user an interaction
    var promptFight = window.prompt ("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    
    // if player chooses to fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        
        // subtract value of playerAttack from value of enemyHealth, update enemyHealth var
        enemyHealth = enemyHealth - playerAttack;
        
        // shows resulting message, note use of trailing and leading spaces
        console.log (playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining." );
        
        
        // check enemy health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
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
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health remaining.");
        }
    }

    else if (promptFight === "skip" || promptFight === "SKIP") {

        // confirm if use wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to skip this encounter?");

        // if true leave fight
        if (confirmSkip) {
            window.alert(playerName + " has chosen to skip the fight!");
            // skipping penalty, subtract user money
            playerMoney = playerMoney - 2;
        }
    }

    else {
        fight();
    }
    
   
};



// this calls the fight function
fight();