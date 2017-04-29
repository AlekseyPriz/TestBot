const vk = new (require( 'vk-io' ));
var messages = require( './messages' );
var users = require( './users' );


exports.check = function(message) {
    vk.api.groups.isMember({
        group_id: 145093906,
        user_id: message.user,
        extended: 1
    })

    .then((groups) => {
        if (groups.member) {
            console.log("Этот пользователь подписан");
            message.send( messages.greeting() );
            users.setDialogStatus(message.user,'1');

    }
        if (!groups.member) {
            message.send( messages.needRegistration() );
            console.log("Этот пользователь не подписан");
        }
    })

    .catch((error) => {
        console.error(error);
    });
};
