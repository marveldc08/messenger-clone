import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(['hi', 'yoo', 'whats up']);

  console.log(input);
  console.log(messages);

  const sendMessage = (event) => {
    setMessages([...messages, input]);
    //setInput("");
  } 
  return (

    <div className="App">
      <h1>Hello Clever Programmer! 🚀</h1>

      
      <input value={input} onChange={event => setInput(event.target.value)} />
      <button onClick={sendMessage()}>send message</button>
    </div>
  );
}

export default App;
