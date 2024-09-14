const questions = [
        {
            question: "What is the traditional male attire in Rajasthan called?",
            options: ["a) Dhoti-Kurta", "b) Lungi", "c) Pagri", "d) Angrakha"],
            answer: 3
        },
        {
            question: "Which dance form is popular in Rajasthan?",
            options: ["a) Kathakali", "b) Ghoomar", "c) Bharatnatyam", "d) Odissi"],
            answer: 1
        },
        {
            question: "Which of the following is a famous folk music genre in Rajasthan?",
            options: ["a) Carnatic", "b) Thumri", "c) Maand", "d) Qawwali"],
            answer: 2
        },
        {
            question: "What is the main religion followed in Rajasthan?",
            options: ["a) Islam", "b) Christianity", "c) Hinduism", "d) Buddhism"],
            answer: 2
        },
        {
            question: "Which language is predominantly spoken in Rajasthan?",
            options: ["a) Hindi", "b) Rajasthani", "c) Bengali", "d) Urdu"],
            answer: 1
        },
        {
            question: "Which festival is associated with camels and is celebrated in Pushkar?",
            options: ["a) Teej", "b) Gangaur", "c) Pushkar Camel Fair", "d) Marwar Festival"],
            answer: 2
        },
        {
            question: "Which festival celebrates the bond between brothers and sisters in Rajasthan?",
            options: ["a) Diwali", "b) Raksha Bandhan", "c) Holi", "d) Makar Sankranti"],
            answer: 1
        },
        {
            question: "Which festival in Rajasthan marks the onset of monsoon?",
            options: ["a) Makar Sankranti", "b) Holi", "c) Teej", "d) Diwali"],
            answer: 2
        },
        {
            question: "Which is a harvest festival celebrated in Rajasthan?",
            options: ["a) Gangaur", "b) Baisakhi", "c) Mewar Festival", "d) Lohri"],
            answer: 0
        },
        {
            question: "What is the name of the kite festival celebrated in Rajasthan?",
            options: ["a) Vasant Panchami", "b) Makar Sankranti", "c) Lohri", "d) Pongal"],
            answer: 1
        },
        {
            question: "Which fort in Rajasthan is known as the 'Golden Fort'?",
            options: ["a) Amer Fort", "b) Jaisalmer Fort", "c) Mehrangarh Fort", "d) Chittorgarh Fort"],
            answer: 1
        },
        {
            question: "Which city is famously known as the 'Pink City' of Rajasthan?",
            options: ["a) Udaipur", "b) Jaipur", "c) Jodhpur", "d) Bikaner"],
            answer: 1
        },
        {
            question: "Where is the City Palace located in Rajasthan?",
            options: ["a) Udaipur", "b) Jodhpur", "c) Bikaner", "d) Jaipur"],
            answer: 0
        },
        {
            question: "Which UNESCO World Heritage Site is located in Rajasthan?",
            options: ["a) Taj Mahal", "b) Hawa Mahal", "c) Chittorgarh Fort", "d) Jantar Mantar, Jaipur"],
            answer: 3
        },
        {
            question: "Which fort is associated with the historical siege of Alauddin Khilji?",
            options: ["a) Amber Fort", "b) Jaisalmer Fort", "c) Chittorgarh Fort", "d) Nahargarh Fort"],
            answer: 2
        },
        {
            question: "What is the name of the Rajasthani miniature painting style?",
            options: ["a) Pichwai", "b) Warli", "c) Pattachitra", "d) Phad"],
            answer: 3
        },
        {
            question: "Which art form depicts the folk deities Pabuji and Devnarayan?",
            options: ["a) Phad painting", "b) Kalamkari", "c) Madhubani", "d) Thangka"],
            answer: 0
        },
        {
            question: "What is the famous traditional puppetry art of Rajasthan called?",
            options: ["a) Kathputli", "b) Bunraku", "c) Wayang", "d) Tholu Bommalata"],
            answer: 0
        },
        {
            question: "Which of the following is a famous textile art from Rajasthan?",
            options: ["a) Batik", "b) Bandhani", "c) Ikat", "d) Kalamkari"],
            answer: 1
        },
        {
            question: "Which Rajasthani art involves painting on camel leather?",
            options: ["a) Zardosi", "b) Usta Art", "c) Kutch Embroidery", "d) Kantha"],
            answer: 1
        },
        {
            question: "Which handicraft is famous for its use of marble in Rajasthan?",
            options: ["a) Blue Pottery", "b) Marble Inlay Work", "c) Lacquerware", "d) Terracotta"],
            answer: 1
        },
        {
            question: "What is the traditional tie-dye textile art of Rajasthan called?",
            options: ["a) Ajrakh", "b) Kalamkari", "c) Bandhani", "d) Ikat"],
            answer: 2
        },
        {
            question: "Which district in Rajasthan is famous for its blue pottery?",
            options: ["a) Udaipur", "b) Jaisalmer", "c) Jaipur", "d) Bikaner"],
            answer: 2
        },
        {
            question: "Which of the following is a Rajasthani wooden craft known for carved furniture?",
            options: ["a) Sandalwood carving", "b) Sheesham woodwork", "c) Ivory carving", "d) Brass work"],
            answer: 1
        },
        {
            question: "What type of embroidery is traditionally done on camel leather in Rajasthan?",
            options: ["a) Zardosi", "b) Aari embroidery", "c) Banjara embroidery", "d) Mirror work"],
            answer: 3
        },
        {
            question: "Which animal is a common motif in Rajasthani art and handicrafts?",
            options: ["a) Elephant", "b) Tiger", "c) Camel", "d) Peacock"],
            answer: 2
        },
        {
            question: "Which city in Rajasthan is known as the 'City of Lakes'?",
            options: ["a) Jaipur", "b) Udaipur", "c) Bikaner", "d) Jaisalmer"],
            answer: 1
        },
        {
            question: "What is the famous stepwell in Rajasthan called?",
            options: ["a) Chand Baori", "b) Adalaj Vav", "c) Rajon Ki Baoli", "d) Agrasen Ki Baoli"],
            answer: 0
        },
        {
            question: "Which Rajasthani fort is famous for its intricate latticework?",
            options: ["a) Mehrangarh Fort", "b) Junagarh Fort", "c) Amber Fort", "d) Nahargarh Fort"],
            answer: 2
        },
        {
            question: "What is the traditional footwear of Rajasthan called?",
            options: ["a) Jutti", "b) Mojari", "c) Kolhapuri", "d) Loafer"],
            answer: 1
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
