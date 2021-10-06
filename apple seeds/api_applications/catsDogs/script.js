let btn = document.querySelector("#btn"),
    animalContainer = document.querySelector("#animal-info"),
    pageCounter = 1;

btn.addEventListener('click', () => {
    let ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', `https://learnwebcode.github.io/json-example/animals-${pageCounter}.json`);
    ourRequest.onload = function() {
        let ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    };
    ourRequest.send();
    pageCounter++;
    console.log(pageCounter);
    if (pageCounter > 3) {
        btn.style.display = "none";
    }
});

function renderHTML(data) {
    let htmlString = "";
    for (let i = 0; i < data.length; i++) {
        htmlString += `<p> ${data[i].name} is a ${data[i].species} that likes to eat `
        for (let j = 0; j < data[i].foods.likes.length; j++) {
            htmlString += `${data[i].foods.likes[j]}`
            if (j < data[i].foods.likes.length - 1) {
                htmlString += ` & `
            }
        }
        htmlString += ` and dislikes `
        for (let j = 0; j < data[i].foods.dislikes.length; j++) {
            htmlString += `${data[i].foods.dislikes[j]}`
            if (j < data[i].foods.dislikes.length - 1) {
                htmlString += ` & `
            }
        }
        htmlString += `.</p>`;
    }

    animalContainer.insertAdjacentHTML('beforeend', htmlString);
}