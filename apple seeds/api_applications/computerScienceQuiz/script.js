const question = document.querySelector(".question"),
    question_category = document.querySelector(".question_category"),
    question_number = document.querySelector(".question_number"),
    question_difficulty = document.querySelector(".question_difficulty"),
    question_text = document.querySelector(".question_text"),
    question_score = document.querySelector(".question_score"),
    btn = document.querySelector(".btn"),
    answer1 = document.querySelector(".answer1"),
    answer2 = document.querySelector(".answer2"),
    answer3 = document.querySelector(".answer3"),
    answer4 = document.querySelector(".answer4");

let index = 0;
let score = 0;
question_score.innerHTML = `Score: ${score}`;
async function getQuestionsData() {
    const questions_proto = await (await fetch('https://opentdb.com/api.php?amount=10&category=18&type=multiple')).json();
    const questions_obj = questions_proto.results;
    console.log(questions_obj);

    //all answers array
    let allAnswers = [];
    allAnswers.push(questions_obj[index].correct_answer);
    questions_obj[index].incorrect_answers.forEach((element, ind) => {
        allAnswers.push(element);
    });
    console.log(allAnswers);
    console.log(shuffle(allAnswers));


    //question text html
    question_category.innerHTML = `Category: ${questions_obj[index].category}`;
    question_difficulty.innerHTML = `Difficulty: ${questions_obj[index].difficulty}`;
    question_number.innerHTML = `Question ${index+1}`;
    question_text.innerHTML = `${questions_obj[index].question}`;

    answer1.value = allAnswers[0];
    answer2.value = allAnswers[1];
    answer3.value = allAnswers[2];
    answer4.value = allAnswers[3];

    answer1.style.backgroundColor = "white";
    answer2.style.backgroundColor = "white";
    answer3.style.backgroundColor = "white";
    answer4.style.backgroundColor = "white";

    let client_currect_ans = ``;

    answer1.addEventListener('click', () => {
        if (answer1.value == questions_obj[index].correct_answer) {
            answer1.style.backgroundColor = "limegreen";
            score++;
            question_score.innerHTML = `Score: ${score}`;
            index++;
            getQuestionsData();
        } else {
            answer1.style.backgroundColor = "orangered";
            getQuestionsData();
        }
    });
    answer2.addEventListener('click', () => {
        if (answer2.value == questions_obj[index].correct_answer) {
            answer2.style.backgroundColor = "limegreen";
            score++;
            question_score.innerHTML = `Score: ${score}`;
            index++;
            getQuestionsData();
        } else {
            answer2.style.backgroundColor = "orangered";
            getQuestionsData();
        }
    });

    answer3.addEventListener('click', () => {
        if (answer3.value == questions_obj[index].correct_answer) {
            answer3.style.backgroundColor = "limegreen";
            score++;
            question_score.innerHTML = `Score: ${score}`;
            index++;
            getQuestionsData();
        } else {
            answer3.style.backgroundColor = "orangered";
            getQuestionsData();
        }
    });

    answer4.addEventListener('click', () => {
        if (answer4.value == questions_obj[index].correct_answer) {
            answer4.style.backgroundColor = "limegreen";
            score++;
            index++;
            getQuestionsData();
            question_score.innerHTML = `Score: ${score}`;
        } else {
            answer4.style.backgroundColor = "orangered";
            getQuestionsData();
        }
    });
    console.log(score);
    // question_score.innerHTML = `Score: ${score}`;
}

function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }

    return array;
}
getQuestionsData();