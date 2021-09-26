// const charactersCount = document.querySelector('textArea');

//characters limit
let limit = 100;

function charactersLimit() {
    let text = document.querySelector('.charactersCount').value.length;
    if (text > 100) {
        document.querySelector(".alert").innerHTML = "Your text has exceeded over " + limit + " words.";
    } else
        document.querySelector(".alert").innerHTML = "";

}