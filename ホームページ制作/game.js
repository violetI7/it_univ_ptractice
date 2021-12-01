const quiz = [
    {
        question:'7',
        answers:[
            '1',
            '3',
            '5',
            '7'
        ],
        correct:'7'
    },
    {
        question:'4',
        answers:[
            '2',
            '4',
            '6',
            '8'
        ],
        correct:'4'
    },
    {
        question:'あ',
        answers:[
            'あ',
            'い',
            'う',
            'え'
        ],
        correct:'あ'
    },
    {
        question:'d',
        answers:[
            'w',
            's',
            'a',
            'd'
        ],
        correct:'d'
    },
]
const quizLength = quiz.length;
let quizIndex = 0;
let correctIndex = 0;
const $button = document.getElementsByTagName('button');

let buttonLength = $button.length;

const setupQuiz = () => {
    document.getElementById('idQuestion').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    };
};
setupQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解');
        correctIndex++;
    }　else {
        window.alert('不正解');
    }
    quizIndex++;
    if(quizIndex < quizLength){
        setupQuiz();
    } else {
        window.alert('あなたの正解数は' + correctIndex + '/' + quizLength + 'でした');
    }
};

let handlerIndex = 0;
while(handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
};