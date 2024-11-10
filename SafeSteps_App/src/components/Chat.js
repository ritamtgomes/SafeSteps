// src/components/Chat.js
import React, { useState } from 'react';
import { useStateTogetherWithPerUserValues } from 'react-together';

const Chat = ({ caseId, caseDetails }) => {
  // Collaborative state for messages using react-together
  const [messages, setMessages, messagesPerUser] = useStateTogetherWithPerUserValues('chat-messages', []);
  const [input, setInput] = useState('');

  // Function to send a message
  const sendMessage = () => {
    if (input.trim()) {
      // Add the new message to the shared state
      setMessages((prevMessages) => [...prevMessages, input]);
      setInput(''); // Clear the input field
    }
  };

  return (
    <div className="chat-container" style={{ padding: '20px', border: '1px solid #ddd', maxWidth: '500px', margin: '0 auto' }}>
      <h3>Chat for Case: {caseId}</h3>
      <p>{caseDetails}</p>
      
      <div className="messages" style={{ marginBottom: '20px', maxHeight: '300px', overflowY: 'auto' }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ padding: '5px 10px', borderBottom: '1px solid #eee' }}>
            {msg}
          </div>
        ))}
      </div>
      
      {/* Chat input */}
      <div className="chat-input" style={{ display: 'flex' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          style={{ padding: '10px', width: '80%', marginRight: '10px' }}
        />
        <button onClick={sendMessage} style={{ padding: '10px 15px' }}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
