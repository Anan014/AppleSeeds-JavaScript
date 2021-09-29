const school = {
    teachers: [{
            id: 1,
            name: "Pinchas",
            subjects: ["chemistry", "biology", "physics"],
            students: [],
            capacityLeft: 3,
        },
        {
            id: 2,
            name: "Williams",
            subjects: ["history", "ethics"],
            students: [],
            capacityLeft: 2,
        },
    ],
    students: [{
            id: 10,
            name: "Jennifer",
            age: 20,
        },
        {
            id: 11,
            name: "Howard",
            age: 23,
        },
        {
            id: 12,
            name: "Old-Timmy",
            age: 86,
        },
        {
            id: 13,
            name: "Houston",
            age: 21,
        },
    ],
};


//1
console.log("question 1");
school.findPerson = function(type, id) {
    return this[type].filter(function(val) { return val.id == id })[0];
}
console.log(school.findPerson("teachers", 2));
console.log(school.findPerson("students", 13));

//2
console.log();
console.log("question 2");
school.assignStudent = function(studentID, sub) {
    let teacher = this['teachers'].filter(teach => {
        return teach.subjects.includes(sub);
    })[0];
    if (teacher.capacityLeft > 0) {
        teacher.students.push(this.findPerson("students", studentID));
        teacher.capacityLeft--;
    } else
        console.log("Sorry, no available teachers left");
    return teacher;

}

console.log(school.assignStudent(10, "biology"));
console.log(school.assignStudent(11, "physics"));
console.log(school.assignStudent(12, "chemistry"));
console.log(school.assignStudent(13, "biology"));

//3
console.log();
console.log("question 3");

school.assignTeachersSubject = function(teacherID, newSub) {
    let teacher = this['teachers'].filter(teacherPerosn => {
        return teacherPerosn.id == teacherID;
    })[0];
    if (teacher.subjects.includes(newSub) == false) {
        teacher.subjects.push(newSub);
    } else
        console.log("The teacher teaches this subject");
    return teacher;
}

console.log(school.assignTeachersSubject(2, "Computer Science"));
console.log(school.assignTeachersSubject(2, "history"));

//4
console.log();
console.log("question 4");

school.addNewStudent = function(studentID, studentName, studentAge) {

    let flag = false;

    this['students'].forEach(student => {
        if (student.id == studentID) {
            flag = true;
        }
    })

    if (flag == true) {
        return "The student is already registered"
        ף
    } else {
        let newStudent = {
            id: studentID,
            name: studentName,
            age: studentAge
        };
        this['students'].push(newStudent);
        return school.students;

    }
}

console.log(school.addNewStudent(15, "Anan", 26));
console.log(school.addNewStudent(11, "Howard", 23));