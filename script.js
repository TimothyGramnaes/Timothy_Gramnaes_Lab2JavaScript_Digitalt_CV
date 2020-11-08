/**
 * Dice roll on header
 */

function rollDice() {
    var die = document.getElementById("die");

    var d1 = Math.floor(Math.random() * 6) +1;
        if (d1 == 1) {
            die.innerHTML = '<img src="imgs/dice/1.png" alt="" srcset="">';
        }
        if (d1 == 2) {
            die.innerHTML = '<img src="imgs/dice/2.png" alt="" srcset="">';
        }
        if (d1 == 3) {
            die.innerHTML = '<img src="imgs/dice/3.png" alt="" srcset="">';
        }
        if (d1 == 4) {
            die.innerHTML = '<img src="imgs/dice/4.png" alt="" srcset="">';
        }
        if (d1 == 5) {
            die.innerHTML = '<img src="imgs/dice/5.png" alt="" srcset="">';
        }
        if (d1 == 6) {
            die.innerHTML = '<img src="imgs/dice/1.png" alt="" srcset="">';
        }

}