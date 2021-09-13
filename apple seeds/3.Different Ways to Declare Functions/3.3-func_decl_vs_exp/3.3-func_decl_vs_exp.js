function percentageOfWorld1(population) {
    return Math.round(population / 7900 * 100 * 10) / 10;
}

function percentageOfWorld2(population1, population2, population3) {
    console.log(`China population its ${percentageOfWorld1(population1)}% of the world population.`);
    console.log(`Israel population its ${percentageOfWorld1(population2)}% of the world population.`);
    console.log(`England population its ${percentageOfWorld1(population3)}% of the world population.`);
}

let china = percentageOfWorld1(1441);
let israel = percentageOfWorld1(9);
let england = percentageOfWorld1(56);

console.log(`China population its ${china}% of the world population.`);
console.log(`Israel population its ${israel}% of the world population.`);
console.log(`England population its ${england}% of the world population.`);
console.log();

percentageOfWorld2(1441, 9, 56);