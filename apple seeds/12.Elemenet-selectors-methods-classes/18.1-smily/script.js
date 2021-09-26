const numbersField = document.querySelector('.numbersField'),
    btn = document.querySelector('.btn'),
    smiles = document.querySelector('.smiles');

btn.addEventListener('click', () => {
    smiles.innerHTML = "";
    if (Number(numbersField.value)) {
        for (let i = 0; i < numbersField.value; i++) {
            smiles.innerHTML += "<img src=\"smile.gif\">";
        }
    } else
        numbersField.value = "Only numbers!"

});