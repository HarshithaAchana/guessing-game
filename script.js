let randomnum = Math.ceil(Math.random() * 100);
console.log(randomnum);

let enterednum = document.getElementById('inputNum');
let parael = document.getElementById("paraEl");
let buttonEl = document.getElementById("bunel");

function submitbutton() {
    let userInput = enterednum.value;

    if (userInput === "") {
        parael.textContent = "Enter any number, dude!";
        parael.style.color = "red";
        buttonEl.style.backgroundColor = "";
        return; // stop here
    }

    let valu = parseInt(userInput);

    if (valu > randomnum) {
        parael.textContent = "Your number is too high";
        parael.style.color = "black";
        buttonEl.style.backgroundColor = "";
    } else if (valu < randomnum) {
        parael.textContent = "Your number is too low";
        parael.style.color = "black";
        buttonEl.style.backgroundColor = "";
    } else if (valu === randomnum) {
        parael.textContent = "HORRAY YOU WON";
        parael.style.color = "green";
        buttonEl.style.backgroundColor = "green";
    } else {
        parael.textContent = "Enter a valid number!";
        parael.style.color = "red";
        buttonEl.style.backgroundColor = "";
    }
}
