var io = require('socket.io')();

io.listen(3000, function() {
	console.log('server listening at %d', 3000);
});

io.on('connection', function(socket) {
	console.log('socket %s connected', socket.id);
        socket.once('disconnect', function() {
                console.log('socket %s disconnected', socket.id);
                socket = null;
        });
});


setInterval(function(){
	global.gc();
	console.log('GC done')
}, 1000*30);