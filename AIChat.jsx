import React, { useState } from 'react';
import '../styles/AIChat.css';

const AIChat = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { text: inputMessage, sender: 'user' }]);
      setInputMessage('');
      
      // Simulate AI response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: `AI: Your message was: "${inputMessage}"`, sender: 'ai' }
        ]);
      }, 1000);
    }
  };

  return (
    <div className="ai-chat-container">
      <div className="ai-chat-box">
        <h3>AI Assistance</h3>
        <div className="messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.sender === 'ai' ? 'ai-message' : 'user-message'}`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <div className="input-area">
          <input
            type="text"
            value={inputMessage}
            onChange={handleInputChange}
            placeholder="Ask me anything..."
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default AIChat;
