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

// shop function
var shop = function() {
    
    // ask user what choice they will make
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Choose 'REFILL', 'UPGRADE', or 'LEAVE'.");
    
    // we will put the actions that will follow user response
    switch (shopOptionPrompt) {
        // if the user chooses 'refill'
        case "REIFLL":
        case "refill":
            
            // adding if statement so player needs money to shop
            if (playerMoney >= 7) {
            
                window.alert("Refilling player's health by 20 for 7 money points.");

            
                // health will increase, money points will be lost
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney -7;
            }

            // else statement if user doesnt have enough money
            else {
                window.alert("Not enough cash!");
            }

            break;

        // user chooses 'upgrade'
        case "UPGRADE":
        case "upgrade":
            
            // adding if statement for upgrade
            if (playerMoney >= 7) {

                window.alert("Upgrading attack power by 6 points for 7 money points.");

                // attack power is increased, money points will be lost
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            }

            // else statement if user doesnt have enough money
            else {
                window.alert("Not enough cash!");
            }

            break;

        // user chooses to 'leave'
        case "LEAVE":
        case "leave":
            window.alert("You leave the store.");

            // user leaves so function will end
            break;

        // edge cases, this is for other inputs
        default:
            window.alert("You did not pick a valid option, please choose an option.");

            // call shop function again at this point
            shop();
            break;    
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

            // if there are still enemies in array
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                
                // ask player if they want to shop
                var storeConfirm = window.confirm("Fight complete. Visit store?");

                // if confirm, execute shop function
                if (storeConfirm) {
                    shop();
                }
            }
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


