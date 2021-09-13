function avgScore(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

function winner(team1, team2) {
    if (team1 > team2)
        return "Team 1 Won";
    else if (team2 > team1)
        return "Team 2 Won";
    else if (team1 == team2)
        return "Draw";
    else
        return "What the hell ?";
}

function winner3(team1, team2, team3) {

    if (team1 > team2 && team1 > team3)
        return "Team 1 Won";
    else if (team2 > team1 && team2 > team3)
        return "Team 2 Won";
    else if (team3 > team1 && team3 > team2)
        return "Team 3 Won";
    else if (team1 == team2 && team1 == team3)
        return "Draw";
    else if (team1 == team2 && team1 > team3)
        return "Team 1 & Team 2 Won and Draw";
    else if (team1 == team3 && team1 > team2)
        return "Team 1 & Team 3 Won and Draw";
    else if (team2 == team3 && team2 > team1)
        return "Team 2 & Team 3 Won and Draw";
}


let johnTeam = avgScore(89, 120, 103);
let mikeTeam = avgScore(116, 94, 123);

console.log(`John's Team scored, 89 120 103, and its avg score is ${johnTeam}`);
console.log(`Mike's Team scored, 116 94 123, and its avg score is ${mikeTeam}`);
console.log(`And its a ${winner(johnTeam,mikeTeam)}`);

console.log();
johnTeam = avgScore(123, 94, 116);
mikeTeam = avgScore(116, 94, 123);

console.log(`John's Team scored, 123 94 116, and its avg score is ${johnTeam}`);
console.log(`Mike's Team scored, 116 94 123, and its avg score is ${mikeTeam}`);
console.log(`And its a ${winner(johnTeam,mikeTeam)}`);

console.log();
johnTeam = avgScore(123, 94, 116);
mikeTeam = avgScore(92, 94, 120);
let maryTeam = avgScore(130, 107, 102);

console.log(`John's Team scored, 123 94 116, and its avg score is ${johnTeam}`);
console.log(`Mike's Team scored, 92 94 120, and its avg score is ${mikeTeam}`);
console.log(`Mike's Team scored, 130 50 102, and its avg score is ${maryTeam}`);
console.log(`And its a ${winner3(johnTeam,mikeTeam,maryTeam)}`);