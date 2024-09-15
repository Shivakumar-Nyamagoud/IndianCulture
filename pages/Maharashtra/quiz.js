const questions = [
    {
        question: "What is the traditional male attire in Maharashtra called?",
        options: ["a) Lungi", "b) Dhoti-Kurta", "c) Kurta-Pajama", "d) Dhotar"],
        answer: 3
    },
    {
        question: "Which dance form is popular in Maharashtra?",
        options: ["a) Lavani", "b) Bharatnatyam", "c) Kathak", "d) Kuchipudi"],
        answer: 0
    },
    {
        question: "Which of the following is a famous folk music genre in Maharashtra?",
        options: ["a) Natya Sangeet", "b) Bhajan", "c) Qawwali", "d) Carnatic"],
        answer: 0
    },
    {
        question: "What is the main religion followed in Maharashtra?",
        options: ["a) Islam", "b) Christianity", "c) Hinduism", "d) Buddhism"],
        answer: 2
    },
    {
        question: "Which language is predominantly spoken in Maharashtra?",
        options: ["a) Hindi", "b) Marathi", "c) Bengali", "d) Gujarati"],
        answer: 1
    },
    {
        question: "Which festival is associated with the worship of Lord Ganesha in Maharashtra?",
        options: ["a) Diwali", "b) Ganesh Chaturthi", "c) Makar Sankranti", "d) Navratri"],
        answer: 1
    },
    {
        question: "Which festival celebrates the New Year in Maharashtra?",
        options: ["a) Holi", "b) Dussehra", "c) Gudhi Padwa", "d) Raksha Bandhan"],
        answer: 2
    },
    {
        question: "Which of the following is a famous form of Maharashtra's painting?",
        options: ["a) Madhubani", "b) Pattachitra", "c) Warli", "d) Kalamkari"],
        answer: 2
    },
    {
        question: "Which is a famous historical fort in Maharashtra?",
        options: ["a) Chittorgarh", "b) Shivneri Fort", "c) Jaisalmer Fort", "d) Amber Fort"],
        answer: 1
    },
    {
        question: "Which city is famously known as the 'City of Dreams' in Maharashtra?",
        options: ["a) Pune", "b) Nagpur", "c) Mumbai", "d) Nashik"],
        answer: 2
    },
    {
        question: "Which region in Maharashtra is famous for its wine production?",
        options: ["a) Nashik", "b) Pune", "c) Kolhapur", "d) Aurangabad"],
        answer: 0
    },
    {
        question: "Which Maharashtrian sweet is typically made during Ganesh Chaturthi?",
        options: ["a) Modak", "b) Rasgulla", "c) Puran Poli", "d) Shrikhand"],
        answer: 0
    },
    {
        question: "Which art form is known for its intricate embroidery on leather in Maharashtra?",
        options: ["a) Zardosi", "b) Paithani weaving", "c) Kolhapuri Chappal", "d) Dhurrie weaving"],
        answer: 2
    },
    {
        question: "Which district in Maharashtra is famous for its Ajanta and Ellora caves?",
        options: ["a) Pune", "b) Nashik", "c) Aurangabad", "d) Solapur"],
        answer: 2
    },
    {
        question: "Which traditional Maharashtrian sport is popular during Dahi Handi celebrations?",
        options: ["a) Kabbadi", "b) Kho Kho", "c) Lezim", "d) Human Pyramid"],
        answer: 3
    },
];


let currentQuestionIndex = 0;
let selectedQuestions = [];
let score = 0;
let answered = false;

window.onload = function () {
    startQuiz();
}

function startQuiz() {
    selectedQuestions = selectRandomQuestions(5);
    currentQuestionIndex = 0;
    score = 0;
    answered = false;
    showQuestion();
    document.getElementById('nextBtn').style.display = 'none';
}

function selectRandomQuestions(num) {
    let shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

function showQuestion() {
    let currentQuestion = selectedQuestions[currentQuestionIndex];
    document.getElementById('question').innerHTML = currentQuestion.question;
    document.getElementById('option1').innerHTML = currentQuestion.options[0];
    document.getElementById('option2').innerHTML = currentQuestion.options[1];
    document.getElementById('option3').innerHTML = currentQuestion.options[2];
    document.getElementById('option4').innerHTML = currentQuestion.options[3];

    // Reset button colors and result display
    document.getElementById('result').innerHTML = "";
    document.getElementById('nextBtn').style.display = 'none';
    let buttons = document.getElementsByClassName('option');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = '#2196F3'; // Reset background color
        buttons[i].disabled = false; // Enable buttons
    }
    answered = false;
}

function checkAnswer(selectedOption) {
    if (answered) return; // Prevent multiple answer attempts

    let currentQuestion = selectedQuestions[currentQuestionIndex];
    let buttons = document.getElementsByClassName('option');
    let correctAnswer = currentQuestion.answer;

    if (selectedOption === correctAnswer) {
        score++;
        document.getElementById('result').innerHTML = "Correct!";
        document.getElementById('result').classList.add('show');
        buttons[selectedOption].style.backgroundColor = '#4CAF50'; // Green for correct
    } else {
        document.getElementById('result').innerHTML = "Wrong!";
        document.getElementById('result').classList.add('show');
        buttons[selectedOption].style.backgroundColor = '#f44336'; // Red for wrong
        buttons[correctAnswer].style.backgroundColor = '#4CAF50'; // Highlight correct answer
    }

    // Disable all buttons after answering
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }

    answered = true;
    document.getElementById('nextBtn').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
        showQuestion();
    } else {
        document.getElementById('quiz').innerHTML = `<h2>Your score is ${score} out of ${selectedQuestions.length}!</h2>`;
        document.getElementById('nextBtn').style.display = 'none'; // Hide "Next Question" button after last question
    }
}
