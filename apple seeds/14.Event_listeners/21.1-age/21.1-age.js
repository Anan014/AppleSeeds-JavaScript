const age = document.querySelector(".age"),
    message = document.querySelector(".message");

document.querySelector(".check_age").addEventListener("click", function() {
    if (age.value >= 18)
        message.innerHTML = ("you can drink appear");
    else if (age.value >= 0 && age.value < 18)
        message.innerHTML = ("you’re too young");
});