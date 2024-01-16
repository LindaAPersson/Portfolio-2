
// questions 
let questions = [{
    numb: 1,
    question: "What color are bananas?",
    answer: [
        { text: 'Yellow', correct: true},
        { text: 'Blue', correct: false},
        { text: 'Green', correct: false}, 
        { text: 'Pink', correct: false}
    ]
},
{
    numb: 2,
    question: "What color are tomatoes?",
    answer: [
            { text: 'Grey', correct: false},
            { text: 'Black', correct: false},
            { text: 'Brown', correct: false}, 
            { text: 'Red', correct: true}
        ]
        
},
{
    numb: 3,
    question: "What color is milk?",
    answer: [
            { text: 'Orange', correct: false},
            { text: 'Brown', correct: false},
            { text: 'White', correct: true}, 
            {text: 'Green', correct: false}
    ]
},
{
    numb: 4,
    question: "What color is snow?",
    answer: [
        { text: 'Red', correct: false},
        { text: 'Blue', correct: false},
        { text: 'White', correct: true}, 
        { text: 'Purple', correct: false}
    ]
},
{
    numb: 5,
    question: "What color are oranges?",
    answer: [
        { text: 'Yellow', correct: false},
        { text: 'Orange', correct: true},
        { text: 'Black', correct: false}, 
        { text: 'Pink', correct: false}
    ]
}
];
// End of questions 

let questionText = document.getElementById('question-text');
let answerOptions = document.getElementById('answer-options');
let nextButton = document.getElementById('next-btn');
let startButton = document.getElementById('start-btn');
let questionCount = document.getElementById('question-count');
let scoreCount = document.getElementById('score-count');

let shuffledQuestions, currentQuestionIndex
currentQuestionIndex++

let score = 0;

startButton.addEventListener('click', startQuiz)

function startQuiz(){
    startButton.classList.add('hide');
    nextButton.textContent = 'Next';
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    score = 0;
    showQuestion();
}

function showQuestion(question) {
    clearGameArea()
    let currentQuestion = questions[currentQuestionIndex];
    questionText.innerText = `${currentQuestion.numb}. ${currentQuestion.question}`;

    currentQuestion.answer.forEach(answer => {
        let button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('options');
        answerOptions.appendChild(button);
        if(answer.correct){
            button.dataset.correct= answer.correct;
        }
        button.addEventListener('click', selectAnswer)
    });
}

function clearGameArea(){
    while(answerOptions.firstChild){
        answerOptions.removeChild(answerOptions.firstChild);
    }
}

function selectAnswer(e){
    let selectedOptions = e.target;
    let isCorrect = selectedOptions.dataset.correct === 'true';
    if(isCorrect){
        selectedOptions.classList.add('correct');
        score++;
        scoreCount.innerText = `Score: ${score}`;
    } else {
        selectedOptions.classList.add('wrong');
    }
    Array.from(answerOptions.children).forEach(button => {
        if(button.dataset.correct === 'true'){
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    
}

function showScore() {
    clearGameArea();
    questionText.innerText = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerText= 'Play again';
}

function handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length){
        showQuestion()
    } else {
    showScore();
    }
}

nextButton.addEventListener('click', ()=>{
    if (currentQuestionIndex < questions.length){
        handleNextButton();
    } else {
        startQuiz();
    }
})


questionCount.innerText = `${i++} out of ${questions.length}!`;

startQuiz();