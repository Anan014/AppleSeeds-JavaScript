const getTenPeople = async() => {
    let all = [];

    for (let i = 1; i <= 10; i++) {
        const request = await (await fetch(`https://swapi.dev/api/people/${i}`)).json();
        const homeWord = await (await fetch(request.homeworld)).json();
        let person = {
            hair: request.hair_color,
            name: request.name,
            height: request.height,
            planet: {
                name: homeWord.name,
                population: homeWord.population
            }
        }
        all.push(person);
    }
    console.log(all);
    return all;
}

const table = document.createElement("table");
document.body.append(table);
table.style.borderCollapse = 'collapse';

const createTable = async() => {
    const all = await getTenPeople();

    let outPut = `
    <tr bgcolor="#80b327">
        <th colSpan="5">Star Wars</th>
    </tr>

    <tr bgcolor="#edf9d2">
        <td>Hair</td>
        <td>Name</td>
        <td>Height</td>
        <td>Planet Name</td>
        <td>Planet Population</td>
    </tr>
    `;
    let color = ``;
    for (let i = 0; i < all.length; i++) {
        i % 2 == 0 ? color = `#e1f5b7` : color = `#edf9d2`;
        outPut += `<tr bgcolor=${color}>`;
        for (let j = 0; j < 5; j++) {

            if (j <= 2) {
                outPut += `<td>${Object.values(all[i])[j]}</td>`;
            } else {
                outPut += `<td>${Object.values(all[i].planet)[j-3]}</td>`;
            }
        }
        outPut += "</tr>";
    }

    table.innerHTML = outPut;
}



createTable();