const quote_box = document.querySelector(".quote__box");

async function getData() {
    const quotes_data = await fetch('https://raw.githubusercontent.com/Anan014/AppleSeeds-JavaScript/main/apple%20seeds/api_applications/lucy/package.json');
    const quotes = await quotes_data.json();
    console.log(quotes);
    console.log(quotes_data);
    console.log("hello");
    console.log(quotes[0]);
}

getData();