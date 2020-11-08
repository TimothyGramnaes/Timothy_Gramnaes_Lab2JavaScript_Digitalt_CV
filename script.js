

function rollDice() {
    var die = document.getElementById("die");

    var d1 = Math.floor(Math.random() * 6) +1;
    die.innerHTML = d1;

    console.log(d1);
}