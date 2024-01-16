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

let shuffledQuestions, currentQuestionIndex
let score = 0;

startButton.addEventListener('click', startQuiz)

function startQuiz(){
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    resetState()
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionText.innerHTML = questionNo + '.' + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerOptions.appendChild(button);
        if(answer.correct){
            button.dataset.correct= answer.correct;
        }
        button.addEventListener('click', selectAnswer)
    });
}

function resetState(){
    nextButton.classList.add('hide');
    while(answerOptions.firstChild){
        answerOptions.removeChild(answerOptions.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if(isCorrect){
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerOptions.children).forEach(button => {
        if(button.dataset.correct === 'true'){
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextButton.style.display = 'block';
}

function showScore() {
    resetState();
    questionText.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML= 'Play again';
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

startQuiz();