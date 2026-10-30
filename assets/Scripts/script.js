const rulesButton = document.getElementById('rulesbtn');
const startButton = document.getElementById('startbtn');
const startScreen = document.querySelector('.start-game');
const answerButtonsDiv = document.getElementById('answers');
const quizContainer = document.querySelector('.quiz');
const question = document.getElementById('question');
const controls = document.querySelector('.controls');
const backButton = document.getElementById('backbtn');
const resetButton = document.getElementById('resetbtn');
const nextButton = document.getElementById('nextbtn');
let totalQuestions;
let score = 0;
let randomOrder, currentQuestion;
document.get

// start button event listener
startButton.addEventListener('click', startGame);

// control btns event listeners
backButton.addEventListener('click', () => {
    currentQuestion--;
});

nextButton.addEventListener('click', () => {
    currentQuestion++;
});

resetButton.addEventListener('click', () => {
    quizContainer.style.display = 'none';
});

// start the game 

function startGame() {
    score = 0;
    currentQuestion = 1;
    totalQuestions = 8;

    document.getElementById('score').innerText = 'Score: ' + score;
    document.getElementById('count-questions').innerText = 'Questions left: ' + totalQuestions;
    
    startScreen.classList.add('hide');

    quizContainer.classList.remove('hide');

    controls.classList.remove('hide');

    showQuestion();
};

// display question

function showQuestion(questions) {

}

// answer selection


// reset game

function resetGame() {
    
}

let questions = [{
    question: 'It’s 7am on a Monday. How are you feeling about yourself?',
    answers: [{
            text: 'Like a whole snack, honestly.',
            correct: true
        },
        {
            text: 'Behind everyone else.',
            correct: false
        }, 
        {
            text: 'A disaster in a hoodie.',
            correct: false  
        },
        {
            text: 'I am never good enough.',
            correct: false
        },
    ]
},
    {
        question: 'You made a tiny mistake. What’s the inner monologue?',
        answers: [{
            text: 'Mistakes happen. I’m learning, that’s the whole point.',
            correct: true
        },
        {
            text: 'Everyone noticed and they’re all judging me.',
            correct: false,
        },
        {
            text: 'I am so stupid.',
            correct: false
        },
        {
            text: 'Why do I even try?',
            correct: false
        },
    ]
}, 
    {
        question: 'Someone compliments your outfit. You say:',
        answers: [{
            text: 'Thank you! I love it too.',
            correct: true
        },
        {
            text: 'Oh, this old thing? It’s nothing.',
            correct: false
        },
        {
            text: 'They must want something.',
            correct: false
        },
        {
            text: 'They’re only saying that to be polite.',
            correct: false
        },
    ]
},
    {
        question: 'Your friend hasn’t replied in three hours. You assume:',
        answers: [{
            text: 'They’re living their life. I’ll hear back soon.',
            correct: true
        },
        {
            text: 'They hate me now.',
            correct: false
        },
        {
            text: 'I said something weird in 2019.',
            correct: false
        },
        {
            text: 'Time to send 14 more texts.',
            correct: false
        },
    ]
},
    {
        question: 'Pick your current energy:',
        answers: [{
            text: 'Main character. Glow-up in progress.',
            correct: true
        },
        {
            text: 'Background extra. Glow-up in progress.',
            correct: false
        },
        {
            text: 'Side quest nobody asked for.',
            correct: false
        },
        {
            text: 'Plot device in someone else’s story',
            correct: false
        },
    ]
},
    {
        question: 'It is a rest day. You feel:',
        answers: [{
            text: 'Rested is productive. I deserve this.',
            correct: true
        },
        {
            text: 'Guilty... I should be doing more.',
            correct: false
        },
        {
            text: 'Lazy.',
            correct: false
        },
        {
            text: 'Like I haven’t earned it.',
            correct: false
        },
    ]
},
    {
        question: 'You catch your reflection before leaving the house. You think:',
        answers: [{
            text: 'Okay, cute. Let’s go.',
            correct: true
        },
        {
            text: 'I look tired and awful.',
            correct: false
        },
        {
            text: 'Everyone else looks better.',
            correct: false
        },
        {
            text: 'Should I get a nose job?',
            correct: false
        },
    ]
},
    {
        question: 'Someone asks for your opinion in the group chat. You:',
        answers: [{
            text: 'Share it. My take is valid.',
            correct: true
        },
        {
            text: 'Say nothing. Nobody cares what I think.',
            correct: false
        },
        {
            text: 'Type a paragraph, delete it, and send a thumbs up.',
            correct: false
        },
        {
            text: 'Agree with whoever spoke first.',
            correct: false
        },
    ]
},];
