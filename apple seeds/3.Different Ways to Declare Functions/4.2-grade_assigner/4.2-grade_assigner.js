function gradAssigner(grade) {
    if (grade >= 90 && grade <= 100)
        return "A";
    else if (grade >= 80 && grade <= 89)
        return "B";
    else if (grade >= 70 && grade <= 79)
        return "C";
    else if (grade >= 65 && grade <= 69)
        return "D";
    else if (grade >= 0 && grade <= 64)
        return "F";
}

console.log("grade: 97: ", gradAssigner(97));
console.log("grade: 87: ", gradAssigner(87));
console.log("grade: 77: ", gradAssigner(77));
console.log("grade: 67: ", gradAssigner(67));
console.log("grade: 57: ", gradAssigner(57));