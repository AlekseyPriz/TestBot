'use strict';

var dialog = require( './dialog' );
const vk = new (require( 'vk-io' ));


vk.setToken('6ae7b294baa55e8b74738e546aa3a7fdd1300735f5a0c4d1ccfeef31ab6ddb715c68e6f13b71ea4e84039');

    vk.longpoll.start()
        .then(() => {
        console.log('Long Poll started');
    });


    vk.longpoll.on('message',(message) => {
        dialog.chat( message );
    });