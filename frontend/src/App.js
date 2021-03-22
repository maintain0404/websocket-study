import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

function App() {
  const [Text, setText] = useState([{text: "안녕하세요"}]);
  const [Value, setValue] = useState('');
  const socket = io.connect('http://localhost:5000');
  // useEffect(() => {
  //   socket.on('hello', (data) => {
  //     console.log(data);
  //   })
  // }, [])

  // useEffect(() => {
  //   socket.on('hello everyone', (data) => {
  //     console.log(data);
  //   })
  // }, [])

  function handleClick(e) {
    console.log(Value);
    socket.emit("send Message", Value);
    setValue("");
  }
  
  function handleChange(e) {
    e.stopPropagation();
    setValue(e.target.value);
    console.log(Value);
  }

  useEffect(() => {
    // setText([...Text, { text: "으아아아"}]) // 이런 방식으로 동적으로 설정 가능함
    socket.on("send Message", (data) => {
      setText((Text) => Text.concat(data));
      console.log(data);
    });
  }, []);

  return (
    <div>
      {Text.map((data) => {
        return <div>{data.text}</div>
      })}
      <input type="text" value={Value} onChange={handleChange} />
      <button onClick={handleClick}>전송</button>
    </div>
  );
}

export default App;
