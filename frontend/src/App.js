import React, { useEffect } from 'react';
import io from 'socket.io-client';

function App() {
  const socket = io.connect('http://localhost:5000');
  useEffect(() => {
    socket.on('hello', (data) => {
      console.log(data);
    })
  }, [])

  useEffect(() => {
    socket.on('hello everyone', (data) => {
      console.log(data);
    })
  }, [])

  return (
    <div className="App">
      안녕하세요?
    </div>
  );
}

export default App;
