# socket.io.leak

    npm install socket.io
    node --expose-gc server.js &
    ps -p <pid> -o rss,vsize,pmem,pid
    
    # run and kill client several times...
    node client 
    ps -p <pid> -o rss,vsize,pmem,pid
