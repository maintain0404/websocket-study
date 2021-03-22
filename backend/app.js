const express = require('express');
const app = express();
const server = app.listen(5000);

const io = require('socket.io')(server, {
    cors: {
        origin: '*',
    }
});

io.on('connection', (socket) => {
    // 연결 되었을 때 실행되는 로직
    // 모든 소켓 이벤트는 여기서 작성
    // 이벤트 호출 -> socket.emit('이벤트 이름', 파라미터)
    // 이벤트 수신 -> socket.on('이벤트 이름', 콜백함수)

    // socket.emit() 해당 클라에만 응답
    // io.emit() 모든 클라에 응답
    // HTTP처럼 똑같이 헤더 날라감

    // socket.emit('hello','안녕하세요');
    // io.emit('hello everyone', '모두 안녕하세요')  

    // 서버에선 socket.on ~
    console.log('Hello world!');
    io.emit('sendText', {
        text: '대충 서버에서 넘어온 값'
    });

    socket.on("sendMessage", (data) => {
        //string

        // 데이터 주는 역할
        io.emit("sendMessage",{
            text: data
        });
    });
});
