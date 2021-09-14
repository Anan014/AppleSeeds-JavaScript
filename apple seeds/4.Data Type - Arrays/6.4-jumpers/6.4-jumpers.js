//1
const jumps = [5, 5, 8, 7, -1, 5, 10, 5, 15];

//2
console.log("2.");

function avgJumper(jumps) {
    let jumpsForJumpers = 3;
    let numOfValidJumps = 0;
    let jumpers = new Array(jumps.length / jumpsForJumpers).fill(0);
    for (let i = 0; i < jumps.length / jumpsForJumpers; i++) {
        for (let j = 0; j < jumpsForJumpers; j++) {
            if (jumps[jumpsForJumpers * i + j] >= 0) {
                jumpers[i] += jumps[jumpsForJumpers * i + j]
                numOfValidJumps++;
            }
        }
        jumpers[i] = jumpers[i] / numOfValidJumps;
        numOfValidJumps = 0;
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