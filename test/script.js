const questions = [
    {
        question: "Какой тег используется для создания абзаца?",
        options: ["<p>", "<div>", "<span>", "<br>"],
        correct: 0 // индекс правильного ответа (A = 0)
    },
    {
        question: "Какое свойство CSS используется для изменения цвета текста?",
        options: ["background-color", "color", "font-size", "border"],
        correct: 1
    },
    {
        question: "Что означает HTML?",
        options: ["Hyper Text Markup Language", "High Text Markup Language", "Hyper Transfer Mail Language", "Home Text Marketing Language"],
        correct: 0
    },
    {
        question: "Какой язык используется для программирования поведения веб-страницы?",
        options: ["CSS", "HTML", "JavaScript", "Python"],
        correct: 2
    }
   {
        question: "Где располагается информация, не отображаемая непосредственно на странице (метаданные, стили, скрипты)?",
        options: ["body", "div class", "head", "title"],
        correct: 2
    },
   {
        question: "Как создать гиперссылку?",
        options: ["a", "b", "v", "g"],
        correct: 0
    },
   {
        question: "Как сделать маркированный список?",
        options: ["al", "ul", "yl", "kl"],
        correct: 1
    },

   {
        question: "Как создать нумерованный список?",
        options: ["ol", "al", "ul", "border"],
        correct: 0
    },

   {
        question: "?",
        options: ["background-color", "color", "font-size", "border"],
        correct: 1
    },

   {
        question: "Какое свойство CSS используется для изменения цвета текста?",
        options: ["background-color", "color", "font-size", "border"],
        correct: 1
    },
  

];
let currentQuestion = 0;
function loadQuestion() {
    const q = questions[currentQuestion];
    document.getElementById('question').textContent = q.question;
    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = '';
    q.options.forEach((option, index) => {
        const label = document.createElement('label');
        label.innerHTML = `<input type="radio" name="answer" value="${index}"> ${option}`;
        answersDiv.appendChild(label);
    });
    document.getElementById('result').innerHTML = '';
    document.getElementById('result').className = '';
}
function checkAnswer() {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (!selected) {
        alert('Пожалуйста, выберите ответ!');
        return;
    }
    const userAnswer = parseInt(selected.value);
    const q = questions[currentQuestion];
    if (userAnswer === q.correct) {
        document.getElementById('result').innerHTML = 'Правильно! Молодец!';
        document.getElementById('result').className = 'correct';
    } else {
        document.getElementById('result').innerHTML = `Неправильно! Правильный ответ: ${q.options[q.correct]}`;
        document.getElementById('result').className = 'incorrect';
    }
}
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion >= questions.length) {
        document.getElementById('quiz-area').innerHTML = '<h2>Викторина завершена!</h2><p>Вы ответили на все вопросы.</p><button onclick="location.reload()">Начать заново</button>';
        return;
    }
    loadQuestion();
}
document.addEventListener('DOMContentLoaded', loadQuestion);
document.getElementById('submit-btn').addEventListener('click', checkAnswer);



 

]

