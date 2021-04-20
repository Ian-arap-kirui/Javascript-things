const quizdata = [
    {
        question: "When was google invented?",
        a: "1975",
        b: "1998",
        c: "2005",
        d: "2000",
        correct: "b",
    }, 
    {
        question: "Which programming language was most used in 2020?",
        a: "Javascript",
        b: "Java",
        c: "Python",
        d: "Kotlin",
        correct: "c",
    },
     {
        question: "What is the most common browser in 2021?",
        a: "Google Chrome",
        b: "Safari",
        c: "Microsoft bing",
        d: 'Mozilla Firefox',
        correct: "a",
    },
     {
        question: "When was A.I created?",
        a: "1975",
        b: "1955",
        c: "2002",
        d: "2001",
        correct: "b",
    },
     {
        question: "Which country has the most advanced nuclear weapons?",
        a: "North Korea",
        b: "United States of America",
        c: "Russia",
        d: "China",
        correct: "c",
    },
     {
        question: "Which country has the strongest Navy in Africa?",
        a: "South Africa",
        b: "Kenya",
        c: "Egypt",
        d: "Algeria",
        correct: "c",
    }
];
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text'); 
const b_text = document.getElementById('b_text'); 
const c_text = document.getElementById('c_text'); 
const d_text = document.getElementById('d_text');
const submitBtn =document.getElementById('submit');
                

let currentQuiz = 0;
let score=0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizdata[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    
} 

function getSelected(){
    
    let answer =undefined;

    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;

        }
        
    });
    return answer;

   
}

function deselectAnswers(){
    answerEls.forEach(answerEl => {
        answerEl.checked = false;

        
        
    });
    
    

}

submitBtn.addEventListener( "click", () => {
    const answer =getSelected();
    if (answer ){
        if(answer === quizdata[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizdata.length){
            loadQuiz();
        } else {
           quiz.innerHTML=`<h2>You answered ${score}/${quizdata.length} correctly</h2>`;
        }

    }

        
    
       
    

    
    
        

   
});