const vk = new (require( 'vk-io' ));
var messages = require( './messages' );
var isAMember = require( './isAMember' );
var topicSelector = require( './topicSelector' );
var test = require( './test' );
var users = require( './users' );



users.setDialogStatus('0');


exports.chat = function (message) {
    users.chekUser(message);

    if (message.hasEmoji) {
        users.setDialogStatus(message.user, '1');
        users.restartQuestion(message.user);
        message.send( messages.start() );
    };

    if (message.flags[1] != 'answered' && users.getDialogStatus(message.user) == '0') {
        isAMember.check( message );
    }

    if (users.getDialogStatus(message.user) == '1'){
        topicSelector.setTopic(message);
    };

    if (message.flags[1] != 'answered' && users.getDialogStatus(message.user) == '2' && message.id != users.getIdMessage(message.user) ) {
        test.checkAnswer(message);
    };

};