// Robot Gladiators


//////////////////////////////////////////////////////////////

// this is a function to generate random numbers
var randomNumber = function (min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
};

//////////////////////////////////////////////////////////////////


// fight variable
var fight = function(enemy) {

    // we will repeat fight function as long as the following condition is true
    while (playerInfo.health > 0 && enemy.health > 0) {
        
        // asks user to fight or skip
        var promptFight = window.prompt ("Would you like to FIGHT or SKIP this encounter? Enter 'FIGHT' or 'SKIP' to choose.");
        
        //player chooses to skip
        if (promptFight === "skip" || promptFight === "SKIP") {

            // confirm if user wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to skip this encounter?");

            // if true leave fight
            if (confirmSkip) {
                window.alert(playerInfo.name + " has chosen to skip the fight!");
    
                // skipping penalty, subtract user money
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("playerInfo.money", playerInfo.money);
                break;
            }
        }

        // subtract value of playerAttack from value of enemyHealth, update enemyHealth var
        // will generate random damage value based on player attack
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

        enemy.health = Math.max(0, enemy.health - damage);
        
        // shows resulting message, note use of trailing and leading spaces
        console.log (playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining." );
        
        
        // check enemy health
        if (enemy.health <= 0) {
            window.alert(enemy.name + " has died!");

            //aware player with money
            playerInfo.money = playerInfo.money + 20;

            break;
        }

        else { 
            window.alert(enemy.name + " still has " + enemy.health + " health remaining.");
        }
        
        // subtract value of enemyAttack from playerHealth, update playerHealth var
        // this damage variable will give random number
        var damage = randomNumber(enemy.attack - 3, enemy.attack);

        playerInfo.health = Math.max(0, playerInfo.health - damage);
        
        // show resulting message
        console.log (enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");
        
        // check player health
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died!");
            break;
        }
        else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health remaining.");
        }
    }  
};
//////////////////////////////////////////////////////////////////

// adding getPlayerName() function to avoid null or blank response
var getPlayerName = function() {
    var name = "";
        while (name === "" || name === null) {
            name = prompt("What is your robot's name?");
        }
}

// since we made this function before the playerInfo object, we can refer to it





/////////////////////////////////////////////////////////////////


// we have placed these objects after randomNumber() so it can be used
// player names robot, gets starting attributes
// we will make custom object for these values
var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert ("Refilling health by 20 for 7 credits.");
            this.health += 20;
            this.money -= 7;
        }
        else {
            window.alert ("Not enough cash!");
        }
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert ("Upgrading attack power by 6 for 7 credits.");
            this.attack += 6;
            this.money -= 7;
        }
        else {
            window.alert ("Not enough cash!");
        }
    }
};

//enemy gets starting attributes
// we will make custom object for these values that is also an array
var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];

////////////////////////////////////////////////////////////

// this function will ask if player wants to play again or it will end the game
var endGame = function() {
    // if player is alive player wins
    if (playerInfo.health > 0) {
        window.alert("Your robot crushed its enemies and saw them driven before it! You have a score of " + playerInfo.money + ".");
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


///////////////////////////////////////////////////////////////////////



// shop function
var shop = function() {
    
    // ask user what choice they will make
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Choose 'REFILL', 'UPGRADE', or 'LEAVE'.");
    
    // we will put the actions that will follow user response
    switch (shopOptionPrompt) {
        // if the user chooses 'refill'
        case "REFILL":
        case "refill":

            ///////////////////////////////
            // all the code below has now been consolidated into the object method
            // adding if statement so player needs money to shop
            // if (playerInfo.money >= 7) {
            
               // window.alert("Refilling player's health by 20 for 7 money points.");

            
                // health will increase, money points will be lost
               // playerInfo.health = playerInfo.health + 20;
                // playerInfo.money = playerInfo.money -7;
            // }
            // else statement if user doesnt have enough money
            // else {
                // window.alert("Not enough cash!");
            // }
            /////////////////////////////////

            // object method for refillHealth 
            playerInfo.refillHealth();
            
            break;


        // user chooses 'upgrade'
        case "UPGRADE":
        case "upgrade":
            
            //////////////////////////////////
            // if statement replaced with object method upgradeAttack
            // adding if statement for upgrade
            // if (playerInfo.money >= 7) {

                // window.alert("Upgrading attack power by 6 points for 7 money points.");

                // attack power is increased, money points will be lost
                // playerInfo.attack = playerInfo.attack + 6;
                // playerInfo.money = playerInfo.money - 7;
            // }

            // else statement if user doesnt have enough money
            // else {
                // window.alert("Not enough cash!");
            // }

            // object method for upgradeAttack
            playerInfo.upgradeAttack();

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


///////////////////////////////////////////////////////////////////


// this function will restart the game
var startGame = function() {

    // reset user stats
    // use playerInfo object method
    playerInfo.reset();

    for(var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {

            // tells user what round it is
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            
            // new enemy is picked based on index of enemyNames array
            var pickedEnemyObj = enemyInfo[i];
            
            // enemy health is reset at fight onset, 
            // this expression will give us a whole number between 0 and 20 then add 40
            pickedEnemyObj.health = randomNumber(40, 60);
            
            // pickedEnemyName variable is put into fight function
            fight(pickedEnemyObj);

            // if there are still enemies in array
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                
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







// calls the startGame function
startGame();


