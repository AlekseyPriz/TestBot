const vk = new (require( 'vk-io' ));
var test = require( './test' );


var users = [];
var userNumber = 0;

var isUser = function (message) {
    var userId = message.user;
    return contains(users, userId);
};

var contains = function(users, userId) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].id === userId) {
            return true;
        }
    }
    return false;
};


var setUser = function( message ) {
    users.push({
        num: userNumber,
        id: message.user,
        idMessage: null,
        status: 0,
        topic: null,
        question: 0,
        answerCounter: null,
        falseAnswer: 0,
    });

    console.log(  'Добавлен новый пользователь. Номер: ' + users[userNumber].num +
        ' Id: ' + users[userNumber].id +
        '. Статус: ' + users[userNumber].status);

    userNumber = userNumber + 1;

};


exports.chekUser = function(message) {
    if ( !isUser( message ) ) {
            setUser(message);
            console.log( users[userNumber - 1].id )
    };
};


exports.isUser = isUser;

exports.setUser = setUser;


exports.setDialogStatus = function ( messageUser, num ) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].id === messageUser) {
            users[i].status = num;
        }
    }
};

exports.getDialogStatus = function (messageUser) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].id === messageUser) {
            return users[i].status;
        }
    }
};

exports.setTopic = function ( messageUser, topic ) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].id === messageUser) {
            users[i].topic = topic;
        }
    }
};


exports.getQuestion = function (messageUser) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].id === messageUser) {
            return users[i].question;
        }
    }
};

exports.restartQuestion = function (messageUser) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].id === messageUser) {
            users[i].question = 0;
        }
    }
};

exports.nextQuestion = function ( messageuser ) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].id === messageuser) {
            users[i].question++;
        }
    }
};

exports.setIdMessage = function ( messageUser, idMessage ) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].id === messageUser) {
            users[i].idMessage = idMessage;
        }
    }
};

exports.getIdMessage = function (messageUser) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].id === messageUser) {
            return users[i].idMessage;
        }
    }
};

exports.getUser = function (messageUser) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].id === messageUser) {
            return users[i];
        }
    }
};

exports.getFalseAnswer = function (messageUser) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].id === messageUser) {
            return users[i].falseAnswer;
        }
    }
};

exports.restartUser = function (messageUser) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].id === messageUser ) {
            users[i].status = 0;
            users[i].falseAnswer = 0;
            users[i].idMessage = null;
            users[i].status = 0;
            users[i].topic = null;
            users[i].question = 0;
            users[i].answerCounter = null;
            users[i].falseAnswer = 0;
        }
    }
};


exports.setFalseAnswer = function ( message ) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].id === message.user) {
                users[i].falseAnswer++;
            };
    };
};
