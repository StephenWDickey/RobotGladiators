



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
for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}

// Game States
    // "WIN" - Player robot has defeated all enemy robots
        // Fight all enemy robots
        // Defeat each enemy robot
    // "LOSE" - Player robot's health is zero or less