const myCountry = {
    country: 'United States',
    capital: 'Washington DC',
    language: 'English',
    population: 328.2,
    neighbours: ['Canada', 'Mexico'],
    describe() {
        return `${this.country} has ${this.population} million people, their mother tongue is ${this.language}, they have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
    },
    checkIsland() {
        return myCountry.isIsland = (this.neighbours.length > 0 ? false : true);
    }
}
console.log(myCountry.describe());
console.log(myCountry);