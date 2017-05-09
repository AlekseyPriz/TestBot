'use strict';

var dialog = require( './dialog' );
const vk = new (require( 'vk-io' ));


vk.setToken('token');

    vk.longpoll.start()
        .then(() => {
        console.log('Long Poll started');
    });


    vk.longpoll.on('message',(message) => {
        dialog.chat( message );
    });
