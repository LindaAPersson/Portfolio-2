
// questions 
let questions = [{
    question: "What color are bananas?",
    answer: [
        { text: 'Yellow', correct: true },
        { text: 'Blue', correct: false },
        { text: 'Green', correct: false },
        { text: 'Pink', correct: false }
    ]
},
{
    question: "What color are tomatoes?",
    answer: [
        { text: 'Grey', correct: false },
        { text: 'Black', correct: false },
        { text: 'Brown', correct: false },
        { text: 'Red', correct: true }
    ]

},
{
    question: "What color is milk?",
    answer: [
        { text: 'Orange', correct: false },
        { text: 'Brown', correct: false },
        { text: 'White', correct: true },
        { text: 'Green', correct: false }
    ]
},
{
    question: "What color is snow?",
    answer: [
        { text: 'Red', correct: false },
        { text: 'Blue', correct: false },
        { text: 'White', correct: true },
        { text: 'Purple', correct: false }
    ]
},
{
    question: "What color are oranges?",
    answer: [
        { text: 'Yellow', correct: false },
        { text: 'Orange', correct: true },
        { text: 'Black', correct: false },
        { text: 'Pink', correct: false }
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
let startingBox = document.getElementById('startingBox');

let shuffledQuestions, currentQuestionIndex
currentQuestionIndex++

let score = 0;
let questionNumber = 0;

startButton.onclick = () => {
    startingBox.classList.add('hide');
    startQuiz();
}

/** This function will start the quiz by generate the questions in a random order. 
 * Set the question index, score, question number to their start value.  
 */
function startQuiz() {
    nextButton.textContent = 'Next';
    
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    score = 0;
    questionNumber = 1;

    showQuestion();
}

/** Gets the questions and answers from the array.
* Displays the question and the question number.
* Creates buttons to display the answer options in.
* Checks which answer is the right one and adds a correct class, to that answer. 
* Shows the question count.  
*/
function showQuestion() {
    clearGameArea()
    let currentQuestion = questions[currentQuestionIndex];
    questionText.innerText = `${questionNumber}. ${currentQuestion.question}`;
    currentQuestion.answer.forEach(answer => {
        let button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('options');
        answerOptions.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer)
    });
    nextButton.disabled = true;
    questionCount.innerText = `Question: ${questionNumber} out of ${questions.length}!`;
}

/** It clears the game area by removing the first child of ‘answerOptions’, which is the buttons.
 */
function clearGameArea() {
    while (answerOptions.firstChild) {
        answerOptions.removeChild(answerOptions.firstChild);
    }
}

/** Checks the selected answer to see if it’s right, and adds classes right and wrong to be able to style with css. 
* Makes the buttons disable after choosing an option. 
* Score count increase if the answer is right.
* Question number increase. 
*/

function selectAnswer(e) {
    let selectedOption = e.target;
    let isCorrect = selectedOption.dataset.correct === 'true';
    selectedOption.classList.add(isCorrect ? 'correct' : 'wrong');
    if (isCorrect) {
        score++;
        scoreCount.innerText = `Score: ${score}`;
    }
    Array.from(answerOptions.children).forEach(button => {
        let isCorrectAnswer = button.dataset.correct === 'true';
        button.classList.add(isCorrectAnswer ? 'correct' : '.');
        button.disabled = true;
    });
    nextButton.disabled = false;
    questionNumber++;
}

/** Shows the user the total score in the questionText area. 
* Next button becomes ‘Play again’ button.
* Score count in the score area becomes invisible. 
*/
function showScore() {
    clearGameArea();
    questionText.innerText = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerText = 'Play again';
    scoreCount.innerText = '';
}

/** Makes the next question appear or if the user has done all the questions it will show the score. 
*/
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion()
    } else {
        showScore();
    }
}

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});