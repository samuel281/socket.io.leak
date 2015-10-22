var Socket = require('socket.io-client');


for (var i = 0; i < 1000; i++) {
    socket = Socket('http://localhost:3000', {multiplex: false});
}

