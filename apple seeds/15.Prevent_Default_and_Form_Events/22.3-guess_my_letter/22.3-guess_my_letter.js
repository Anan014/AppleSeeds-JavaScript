const messeage = document.querySelector(".massege"),
    tryLetter = document.querySelector(".tryletter"),
    win = document.querySelector(".playagain"),
    show = document.querySelector(".showletters"),
    btn = document.querySelector(".btn"),
    possibleAnswers = 'abcdefghijklmnopqrstuvwxyz';

tryLetter.style.width = "13px"
tryLetter.focus();

document.body.style.textAlign = "center";

let randomIndex = Math.floor(Math.random() * possibleAnswers.length),
    randomLetter = possibleAnswers[randomIndex],
    triedletters = "";

btn.style.display = "none";
tryLetter.addEventListener("keyup", () => {
    let str = tryLetter.value;
    if (possibleAnswers.includes(str)) {
        if (triedletters.includes(str)) {
            messeage.innerHTML = `${str} has already been guessed!`;
            messeage.style.fontSize = "20px"

        } else {
            triedletters += str + " | ";
            messeage.innerHTML = `Guess again!`;
            messeage.style.fontSize = "20px"
            messeage.style.color = "red"
            show.innerHTML = `${triedletters}`;
            show.style.color = "red"
        }
        tryLetter.value = "";

        if (str === randomLetter) {
            messeage.innerHTML = `${randomLetter.toUpperCase()} - is currect!`;
            messeage.style.color = "green"
            messeage.style.fontSize = "20px"
            win.innerHTML = "wanna play again?";
            show.innerHTML = "";
            tryLetter.style.display = "none";
            btn.style.display = "block";

        }
    } else {
        messeage.innerHTML = `invalid letter`;
        tryLetter.value = "";
    }
});
btn.addEventListener("click", () => {
    location.reload()

});