import React, { useState } from 'react';
import './bootstrap/css/bootstrap.min.css';
import './app.css';

const App: React.FC = () => {
  const [messages, setMessages] = useState('')
  const getMessages = async () => {

    const response = await fetch('http://localhost:3001/api/getData')
    const myJson = await response.json();
    setMessages(JSON.stringify(myJson.data))
  }
  return (
    <div className="App">
      <div className="container">
        Friends


    {/* <button onClick={getMessages}>
        add Message
    </button> */}
        {messages}
      </div>




    </div>
  );
}

export default App;
