const questions = [
    {
        question: "Which city is known as the 'Queen of the Arabian Sea'?",
        options: ["Kochi", "Thiruvananthapuram", "Kozhikode", "Alappuzha"],
        answer: 0
    },
    {
        question: "Which festival is the biggest and most famous in Kerala?",
        options: ["Onam", "Vishu", "Thrissur Pooram", "Navratri"],
        answer: 0
    },
    {
        question: "Which is the official language of Kerala?",
        options: ["Malayalam", "Tamil", "Kannada", "Telugu"],
        answer: 0
    },
    {
        question: "Which of the following is a traditional Kerala dance form?",
        options: ["Kathakali", "Bharatanatyam", "Odissi", "Kuchipudi"],
        answer: 0
    },
    {
        question: "Which river is known as the 'Life Line of Kerala'?",
        options: ["Periyar", "Kaveri", "Godavari", "Yamuna"],
        answer: 0
    },
    {
        question: "What is the traditional boat race held during Onam?",
        options: ["Vallamkali", "Kite Race", "Elephant Race", "Horse Race"],
        answer: 0
    },
    {
        question: "Which is the largest backwater stretch in Kerala?",
        options: ["Vembanad Lake", "Ashtamudi Lake", "Punnamada Lake", "Sasthamkotta Lake"],
        answer: 0
    },
    {
        question: "Which Kerala art form involves martial arts techniques?",
        options: ["Kalaripayattu", "Kathakali", "Mohiniyattam", "Theyyam"],
        answer: 0
    },
    {
        question: "Which spice is Kerala most famous for?",
        options: ["Black Pepper", "Cardamom", "Cinnamon", "Turmeric"],
        answer: 0
    },
    {
        question: "Which is a famous dish in Kerala's cuisine?",
        options: ["Sadya", "Biryani", "Masala Dosa", "Dhokla"],
        answer: 0
    },
    {
        question: "Which beach in Kerala is famous for its lighthouse?",
        options: ["Kovalam", "Varkala", "Marari", "Bekal"],
        answer: 0
    },
    {
        question: "What is the main mode of traditional fishing in Kerala?",
        options: ["Chinese Fishing Nets", "Deep-Sea Fishing", "Aquaculture", "Gill Netting"],
        answer: 0
    },
    {
        question: "Which town is known as the 'Land of Spices' in Kerala?",
        options: ["Kozhikode", "Idukki", "Kannur", "Wayanad"],
        answer: 1
    },
    {
        question: "Which of the following is a traditional Kerala theatre art form?",
        options: ["Koodiyattam", "Yakshagana", "Kathak", "Bharatanatyam"],
        answer: 0
    },
    {
        question: "Which wildlife sanctuary in Kerala is famous for elephants?",
        options: ["Periyar Wildlife Sanctuary", "Wayanad Wildlife Sanctuary", "Silent Valley", "Parambikulam"],
        answer: 0
    },
    {
        question: "Which hill station in Kerala is famous for tea plantations?",
        options: ["Munnar", "Thekkady", "Ponmudi", "Nelliampathy"],
        answer: 0
    },
    {
        question: "Which city is the capital of Kerala?",
        options: ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur"],
        answer: 0
    },
    {
        question: "Which traditional garment is commonly worn by women in Kerala?",
        options: ["Mundu", "Saree", "Salwar Kameez", "Ghagra Choli"],
        answer: 0
    },
    {
        question: "Which of these temples is one of the richest in the world, located in Kerala?",
        options: ["Sree Padmanabhaswamy Temple", "Guruvayur Temple", "Vaikom Mahadeva Temple", "Chottanikkara Temple"],
        answer: 0
    },
    {
        question: "Which Kerala festival marks the beginning of the Malayalam New Year?",
        options: ["Vishu", "Onam", "Thrissur Pooram", "Navratri"],
        answer: 0
    }
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

    document.getElementById('result').innerHTML = "";
    document.getElementById('nextBtn').style.display = 'none';
    let buttons = document.getElementsByClassName('option');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = '#2196F3'; 
        buttons[i].disabled = false; 
    }
    answered = false;
}

function checkAnswer(selectedOption) {
    if (answered) return; 

    let currentQuestion = selectedQuestions[currentQuestionIndex];
    let buttons = document.getElementsByClassName('option');
    let correctAnswer = currentQuestion.answer;

    if (selectedOption === correctAnswer) {
        score++;
        document.getElementById('result').innerHTML = "Correct!";
        document.getElementById('result').classList.add('show');
        buttons[selectedOption].style.backgroundColor = '#4CAF50'; 
    } else {
        document.getElementById('result').innerHTML = "Wrong!";
        document.getElementById('result').classList.add('show');
        buttons[selectedOption].style.backgroundColor = '#f44336'; 
        buttons[correctAnswer].style.backgroundColor = '#4CAF50'; 
    }

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
        document.getElementById('nextBtn').style.display = 'none';
    }
}
