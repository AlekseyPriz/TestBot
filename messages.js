const vk = new (require( 'vk-io' ));
var test = require( './test' );
var users = require( './users' );


exports.greeting = function() {
    return 'Привет! ' +
            '\nЯ бот, который поможет тебе подготовиться к ЕГЭ. ' +
            'Пришли мне номер темы/задания, по которой ты хочешь тренироваться.' +
            '\n 1. Математика'+
            '\n 2. Литература'+
            '\n 3. Русский язык'
};

exports.start = function() {
    return 'Пришли мне номер темы/задания, по которой ты хочешь тренироваться.' +
        '\n 1. Математика'+
        '\n 2. Литература'+
        '\n 3. Русский язык'
};

exports.needRegistration = function() {
    return 'Для начала тестирования необходимо вступить в сообщество!'
};

exports.announceTopic = function(message) {
    if (message.text == '1') {
        message.send ('Тест по математике: '+
            '\n\nПервый вопрос: \n\n'+
            test.getQuestion(message) );
    };

    if (message.text == '2') {
        message.send ('Тест по Литературе: '+
            '\n\nПервый вопрос: \n\n'+
            test.getQuestion(message) );
    };

    if (message.text == '3') {
        message.send ('Тест по Русскому языку: '+
            '\n\nПервый вопрос: \n\n'+
            test.getQuestion(message) );
    };
};

exports.startTest = function(message) {
    message.send( messages.announceTopic(message.text) +
        '\n\nПервый вопрос: \n\n'+
        test.getQuestion(message) );
};

exports.correctAnswer = function(message) {
    message.send ( 'Правильный ответ! \n\nСледующий вопрос: \n\n-'
        + test.questions()[users.getQuestion(message.user)].question );
};

exports.inCorrectAnswer = function(message) {

    if ( users.getFalseAnswer(message.user) !== 3 ) {
        message.send('Ответ не верный.\n\nВаше количество неверных ответов = ' + users.getFalseAnswer(message.user) +
            '\n\nСледующий вопрос: \n\n-' + test.questions()[users.getQuestion(message.user)].question);
    } else {
        message.send('Ответ не верный.\n\nВаше количество неверных ответов = ' + users.getFalseAnswer(message.user)
        + '\n\n Рекомендуем Вам пройти обучение');
    };
};

exports.recommendation = function(message) {
    message.send( 'У вас уже 3 неправильных ответа. Рекомендуем Вам пройти обучение!' );
};





