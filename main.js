var quizdata = [

    {
        question: "Which of the following keywords is used to define a variable in Javascript",

        a : "var",

        b : "let",

        c: "Both a and b",

        d : "None",

        correct: "c"

    },

    {

        question: "Upon encountering empty statements, what does the Javascript Interpreter do?",
        
        a : "Throws an error",

        b : "Ignores the statement",

        c: "gives a warning",

        d : "None",

        correct: "b"

    },

    {
        question: "How can a datatype be declared to be a constant type?",
        
        a : "const",

        b : "var",

        c: "let",

        d : "constant",

        correct: "a"

    },

    {
        question: "What keyword is used to check whether a given property is valid or not?",
        
        a : "in",

        b : "is in",

        c: "exists",

        d : "lies",

        correct: "a"

    },


    {
        question: "Which is not programing language",
        
        a : "HTML",

        b : "Python",

        c: "JS",

        d : "C++",

        correct: "a"

    }
]

var quiz = document.getElementById('question')
var answer = document.querySelectorAll('.answer')
var question = document.getElementById('question')
var  option_a = document.getElementById('a_value')
var  option_b = document.getElementById('b_value')
var  option_c = document.getElementById('c_value')
var  option_d = document.getElementById('d_value')
var sub = document.getElementById('Sub')


var current_question = 0
var quizrScore = 0


loadquiz()

function loadquiz()
{

    deselct()

    question.innerHTML = quizdata[current_question].question
    option_a.innerText = quizdata[current_question].a
    option_b.innerText = quizdata[current_question].b
    option_c.innerText = quizdata[current_question].c
    option_d.innerText = quizdata[current_question].d

}

function deselct()
{
    answer.forEach(answer=>answer.checked=false)
}

sub.addEventListener('click', ()=>{

    var selectopt;

    answer.forEach(answer=>{
        if(answer.checked)
        {
            selectopt=answer.id
        }
    })

    if(selectopt==quizdata[current_question].correct)
    {
        quizrScore = quizrScore+1
    }

    current_question= current_question+1
    

    if (current_question==quizdata.length)
    {
        document.getElementById('quizdiv').innerHTML = '<h1>You have answered</h1>' + quizrScore + '</br><h1>Out Of </h1>' + quizdata.length

    }
    else
    {
        loadquiz()
    }
})