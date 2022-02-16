



// player names robot, gets starting attributes
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

//enemy gets starting attributes
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;


// fight variable
var fight = function() {
    // tells players they are starting round
    window.alert ("Welcome to Robot Gladiators!");
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
};



// this calls the fight function
fight();