var messages = require( './messages' );
var users = require( './users' );
const vk = new (require( 'vk-io' ));


var questions = [   { question : "Первый вопрос",       answer : 1},
                    { question : "Второй вопрос",       answer : 2},
                    { question : "Третий вопрос",       answer : 3},
                    { question : "Четвертый вопрос",    answer : 4},
                    { question : "Пятый вопрос",        answer : 5},
                    { question : "Шестой вопрос",       answer : 6},
                    { question : "Седьмой вопрос",      answer : 7},
                    { question : "Восьмой вопрос",      answer : 8},
                    { question : "Девятый вопрос",      answer : 9},
                    { question : "Десятый вопрос",      answer : 10},
];

var correctAnswer = function (message) {
        users.nextQuestion(message.user);
        messages.correctAnswer(message);
};

var inCorrectAnswer = function (message) {
        if (users.getFalseAnswer(message.user) !== 3 ) {
                users.setFalseAnswer(message);
                users.nextQuestion(message.user);
                messages.inCorrectAnswer(message);
        } else {
            users.restartUser(message.user);
        }
};

exports.question = function(message) {
     return questions[answerCounter].question;
};

exports.getQuestion = function (message) {
    return  questions[users.getQuestion(message.user)].question
};

exports.checkAnswer = function (message) {
    if ( +message.text == +questions[users.getQuestion(message.user)].answer) {
        correctAnswer(message);
    } else {
        inCorrectAnswer(message);
    };
};

exports.questions = function() {
    return questions;
};