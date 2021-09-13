//1
const jumps = [5, 5, 8, 7, -1, 5];

//2
console.log("2.");

function avgJumper(jumps) {
    let jumpers = new Array(jumps.length / 3).fill(0);
    for (let i = 0; i < jumps.length / 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (jumps[3 * i + j] >= 0)
                jumpers[i] += jumps[3 * i + j]
        }
        jumpers[i] = jumpers[i] / 3;
    }
    return jumpers;

}
console.log(avgJumper(jumps));
console.log();

//3
console.log("3.");

function bestAvgJump(jumps) {
    return Math.max(...avgJumper(jumps));
}
console.log(bestAvgJump(jumps));
console.log();

//4
console.log("4.");

function bestJump(jumps) {
    return Math.max(...jumps);
}
console.log(bestJump(jumps));