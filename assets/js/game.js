var playerName = window.prompt("What is your robot's name? ");
var playerHealth = 100;
var playerAttack = 10;

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

//Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
enemyHealth = enemyHealth - playerAttack;
console.log(
  playerName +
    " attacked " +
    enemyName +
    ". " +
    " Now has " +
    enemyHealth +
    " health remaining "
);

// Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
playerHealth = playerHealth - enemyAttack;
console.log(
  enemyName +
    " attacked " +
    playerName +
    ". " +
    playerName +
    " now has " +
    playerHealth +
    " health remaining "
);

var fight = function () {
  window.alert("Robert Gladiators has began! ");
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
  } else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }
  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }
};

fight();
