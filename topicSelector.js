const vk = new (require( 'vk-io' ));
var messages = require( './messages' );
var dialog = require( './dialog' );
var test = require( './test' );
var users = require( './users' );

exports.setTopic = function(message) {

    if ( message.text == '1') {
        users.setDialogStatus(message.user,'2');
        users.setTopic(message.user,"Математика");
        messages.announceTopic(message);
        users.setIdMessage(message.user, message.id );
    }

    if ( message.text == '2') {
        users.setDialogStatus(message.user,'2');
        users.setTopic(message.user,"Литература");
        messages.announceTopic(message);
        users.setIdMessage(message.user, message.id );
    }

    if ( message.text == '3') {
        users.setDialogStatus(message.user,'2');
        users.setTopic(message.user,"Русския Язык");
        messages.announceTopic(message);
        users.setIdMessage(message.user, message.id );
    }
};


