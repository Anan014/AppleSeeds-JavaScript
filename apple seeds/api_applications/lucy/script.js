const quote_box = document.querySelector(".quote__box"),
    quote_img = document.querySelector(".quote__img"),
    quote_author = document.querySelector(".quote__author"),
    quote_text = document.querySelector(".quote__text"),
    btn = document.querySelector(".btn");

async function getData() {
    const quotes_data = await fetch('https://raw.githubusercontent.com/Anan014/AppleSeeds-JavaScript/main/apple%20seeds/api_applications/lucy/allQuotes.json');
    const quotes = await quotes_data.json();

    let randomQuoteNumber = Math.floor(Math.random() * quotes.length);

    quote_text.innerHTML = `“ ${quotes[randomQuoteNumber].quote} ”`;
    quote_author.innerHTML = `- ${quotes[randomQuoteNumber].author}`;
}

btn.addEventListener('click', () => {
    getData();
});