function runGame(index){
    let questionsText = document.getElementById('question-text');
    questionsText.textContent = `${questions[index].numb}. ${questions[index].question}`;

}