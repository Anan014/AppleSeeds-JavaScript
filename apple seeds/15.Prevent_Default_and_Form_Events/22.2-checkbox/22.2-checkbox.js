const mycheckbox = document.querySelector(".mycheckbox"),
    div = document.querySelector("div");
div.style.display = 'none';

function checkImage() {
    mycheckbox.checked ? div.style.display = 'block' : div.style.display = 'none';
}

mycheckbox.addEventListener('click', checkImage);